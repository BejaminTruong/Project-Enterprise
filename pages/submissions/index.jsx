import { AddIcon, DeleteIcon, EditIcon, InfoIcon } from "@chakra-ui/icons";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  useDisclosure,
  Button,
  Container,
  Center,
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";
import { format } from "date-fns";
import { useSession, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SubmissionModal from "../../components/SubmissionModal";
import styles from "../../styles/Submission.module.css";
const Submissions = () => {
  const { data: session } = useSession();
  const [submissionArr, setSubmissionArr] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalValue, setModalValue] = useState({});
  const router = useRouter();
  useEffect(() => {
    if (!session) {
      return setSubmissionArr([]);
    }
    fetchData();
  }, []);

  useEffect(() => {
    onClose();
  }, [submissionArr]);

  const fetchData = async () => {
    const res = await axios.get("/api/submissions");
    setSubmissionArr(res.data);
  };
  const handleEdit = (submission) => {
    setModalValue(submission);
    onOpen();
  };
  const handleAdd = () => {
    setModalValue({});
    onOpen();
  };
  const handleDelete = async (id) => {
    const res = await axios.delete(`/api/submissions/${id}`);
    if (res.data.message) alert("Error: " + res.data.message);
    fetchData();
  };
  return (
    <Container maxW="100%" className={styles.submissionTable}>
      {submissionArr.length < 1 ? (
        <Center paddingTop={"15%"}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Center>
      ) : (
        <>
          {session?.user.roles.some(
            (e) => e.name === "Admin" || e.name === "Manager"
          ) ? (
            <Button
              leftIcon={<AddIcon />}
              colorScheme="cyan"
              style={{ width: "80px", marginTop: "10px" }}
              onClick={handleAdd}
            >
              Add
            </Button>
          ) : null}
          <TableContainer className={styles.subTabContainer}>
            <Table variant="striped" colorScheme="teal">
              <Thead>
                <Tr>
                  <Th>#</Th>
                  <Th>Name</Th>
                  <Th>Description</Th>
                  <Th>Closure date</Th>
                  <Th>Final closure date</Th>
                  <Th textAlign={"center"}>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {submissionArr?.map((e, index) => (
                  <Tr key={index}>
                    <Td>{index + 1}</Td>
                    <Td>{e.name}</Td>
                    <Td>{e.description}</Td>
                    <Td>{format(Date.parse(e.closureDate), "yyyy-MM-dd")}</Td>
                    <Td>
                      {format(Date.parse(e.finalClosureDate), "yyyy-MM-dd")}
                    </Td>
                    <Td display={"flex"} justifyContent={"space-around"}>
                      <Button
                        leftIcon={<InfoIcon />}
                        onClick={() => router.push(`/submissions/${e.id}`)}
                        colorScheme="cyan"
                        style={{ width: "80px" }}
                      >
                        Details
                      </Button>
                      {session?.user.roles.some(
                        (e) => e.name === "Admin" || e.name === "Manager"
                      ) && (
                        <>
                          <Button
                            leftIcon={<EditIcon />}
                            onClick={() => handleEdit(e)}
                            colorScheme="teal"
                            style={{ width: "80px" }}
                          >
                            Edit
                          </Button>
                          <Button
                            leftIcon={<DeleteIcon />}
                            onClick={() => handleDelete(e.id)}
                            colorScheme="red"
                            style={{ width: "80px" }}
                          >
                            Delete
                          </Button>
                        </>
                      )}
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
            <SubmissionModal
              isOpen={isOpen}
              onClose={onClose}
              modalValue={modalValue}
              fetchData={fetchData}
            />
          </TableContainer>
        </>
      )}
    </Container>
  );
};

export default Submissions;

export const getServerSideProps = async (ctx) => {
  return {
    props: {
      session: await getSession(ctx),
    },
  };
};
