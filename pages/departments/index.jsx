import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
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
  Flex,
} from "@chakra-ui/react";
import axios from "axios";
import { useSession, getSession } from "next-auth/react";
import { useEffect, useState } from "react";
import DepartmentModal from "../../components/DepartmentModal";
import styles from "../../styles/Department.module.css"
const Departments = () => {
  const { data: session, status } = useSession();
  const [departmentArr, setDepartmentArr] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalValue, setModalValue] = useState({});
  useEffect(() => {
    if (!session) {
      return setDepartmentArr([]);
    }
    fetchData();
  }, []);

  useEffect(() => {
    onClose();
  }, [departmentArr]);

  const fetchData = async () => {
    const res = await axios.get("/api/departments");
    setDepartmentArr(res.data);
  };
  const handleEdit = (department) => {
    setModalValue(department);
    onOpen();
  };
  const handleAdd = () => {
    setModalValue({});
    onOpen();
  };
  const handleDelete = async (id) => {
    const res = await axios.delete(`/api/departments/${id}`);
    if (res.data.message) alert("Error: " + res.data.message);
    fetchData();
  };
  if (status === "unauthenticated")
    return "You need to logged in to access this page!";
  return (
    <Flex>
      <Container maxW="container.md" className={styles.departmentTable}>
        {departmentArr.length < 1 ? (
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
            <Button
              leftIcon={<AddIcon />}
              colorScheme="cyan"
              style={{ width: "80px", marginTop: "10px" }}
              onClick={handleAdd}
            >
              Add
            </Button>
            <TableContainer className={styles.depTabContainer}>
              <Table variant="striped" colorScheme="teal">
                <Thead>
                  <Tr>
                    <Th>#</Th>
                    <Th>Name</Th>
                    <Th>Total Idea</Th>
                    <Th textAlign="center">Actions</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {departmentArr?.map((e, index) => (
                    <Tr key={index}>
                      <Td>{index + 1}</Td>
                      <Td>{e.name}</Td>
                      <Td>{e.totalIdea}</Td>
                      <Td display={"flex"} justifyContent={"space-around"}>
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
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
              <DepartmentModal
                isOpen={isOpen}
                onClose={onClose}
                modalValue={modalValue}
                fetchData={fetchData}
              />
            </TableContainer>
          </>
        )}
      </Container>
    </Flex>
  );
};

export default Departments;

export const getServerSideProps = async (ctx) => {
  return {
    props: {
      session: await getSession(ctx),
    },
  };
};
