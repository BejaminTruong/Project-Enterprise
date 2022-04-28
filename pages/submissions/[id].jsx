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
  Tag,
  Box,
} from "@chakra-ui/react";
import axios from "axios";
import { format } from "date-fns";
import { useSession, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CSVLink } from "react-csv";
import IdeaModal from "../../components/IdeaModal";
import styles from "../../styles/IdeaList.module.css";
const SubmissionDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: session } = useSession();
  const [ideaArr, setIdeaArr] = useState([]);
  const [submissionData, setSubmissionData] = useState({});
  const [userData, setUserData] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalValue, setModalValue] = useState({});

  useEffect(() => {
    if (!session) {
      return setIdeaArr([]);
    }
    fetchData();
  }, []);

  useEffect(() => {
    onClose();
  }, [ideaArr]);

  const fetchData = async () => {
    const res1 = await axios.get(`/api/submissions?id=${id}`);
    setSubmissionData(res1.data);
    const res2 = await axios.get(`/api/submissions/getIdeas/${id}`);
    if (res2.data.message) return setIdeaArr([]);
    setIdeaArr(res2.data);
    const res3 = await axios.get("/api/users");
    if (res3.data.message) return setUserData([]);
    const newUserArr = res3.data.filter((u) =>
      u.roles.some((e) => e.name === "Coordinator")
    );
    const filteredUser = newUserArr.map((u) => ({
      email: u.email,
      name: u.fullName,
    }));
    setUserData([
      ...filteredUser,
      { email: session.user.email, name: session.user.name },
    ]);
  };
  const handleEdit = (idea) => {
    setModalValue(idea);
    onOpen();
  };
  const handleAdd = () => {
    setModalValue({});
    onOpen();
  };
  const handleDelete = async (id) => {
    const res = await axios.delete(`/api/ideas/${id}`);
    if (res.data.message) alert("Error: " + res.data.message);
    fetchData();
  };
  const handleView = async (id) => {
    await axios.post("/api/views/create", {
      userId: session.user.userId,
      ideaId: id,
    });
    router.push(`/submissions/ideas/${id}`);
  };

  return (
    <Container maxW="container.xl" className={styles.ideaTable}>
      {Date.parse(submissionData.closureDate) <= Date.now() ? (
        <Box display="flex" justifyContent="center">
          <Tag my={5} size="md" variant="solid" colorScheme="orange">
            Submission closed, you can still comment until final closure date
          </Tag>
        </Box>
      ) : (
        <Button
          leftIcon={<AddIcon />}
          colorScheme="cyan"
          style={{ width: "80px", marginTop: "10px" }}
          onClick={handleAdd}
        >
          Add
        </Button>
      )}
      {ideaArr.length < 1 ? (
        <Box display="flex" justifyContent="center">
          <Tag my={5} size="md" variant="solid" colorScheme="orange">
            This submission have no idea
          </Tag>
        </Box>
      ) : (
        <TableContainer className={styles.ideaTabContainer}>
          <Table variant="striped" colorScheme="teal">
            <Thead>
              <Tr>
                <Th>#</Th>
                <Th>Title</Th>
                <Th>Description</Th>
                <Th>Created Date</Th>
                <Th>Like</Th>
                <Th>Dislike</Th>
                <Th>View Count</Th>
                <Th textAlign={"center"}>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {ideaArr?.map((e, index) => (
                <Tr key={index}>
                  <Td>{index + 1}</Td>
                  <Td>{e.title}</Td>
                  <Td>{e.description}</Td>
                  <Td>{format(Date.parse(e.createdDate), "yyyy-MM-dd")}</Td>
                  <Td>{e.totalLike}</Td>
                  <Td>{e.totalDislike}</Td>
                  <Td>{e.totalView}</Td>
                  <Td display={"flex"} justifyContent={"space-around"}>
                    <Button
                      leftIcon={<InfoIcon />}
                      onClick={() => handleView(e.id)}
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
        </TableContainer>
      )}
      <IdeaModal
        isOpen={isOpen}
        onClose={onClose}
        modalValue={modalValue}
        fetchData={fetchData}
        submissionId={+id}
        userId={session.user.userId}
        userData={userData}
        session={session}
      />
      {ideaArr.length >= 1 &&
      session?.user.roles.some(
        (e) => e.name === "Admin" || e.name === "Manager"
      ) ? (
        <CSVLink className="btn btn-primary mt-5" data={ideaArr}>
          Download All Data as CSV
        </CSVLink>
      ) : null}
    </Container>
  );
};

export default SubmissionDetails;

export const getServerSideProps = async (ctx) => {
  return {
    props: {
      session: await getSession(ctx),
    },
  };
};
