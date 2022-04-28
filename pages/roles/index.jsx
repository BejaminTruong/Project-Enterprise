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
} from "@chakra-ui/react";
import axios from "axios";
import { useSession, getSession } from "next-auth/react";
import { useEffect, useState } from "react";
import RoleModal from "../../components/RoleModal";
import styles from "../../styles/Role.module.css"
const Roles = () => {
  const { data: session, status } = useSession();
  const [roleArr, setRoleArr] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalValue, setModalValue] = useState({});
  useEffect(() => {
    if (!session) {
      return setRoleArr([]);
    }
    fetchData();
  }, []);

  useEffect(() => {
    onClose();
  }, [roleArr]);

  const fetchData = async () => {
    const res = await axios.get("/api/roles");
    setRoleArr(res.data);
  };
  const handleEdit = (role) => {
    setModalValue(role);
    onOpen();
  };
  const handleAdd = () => {
    setModalValue({});
    onOpen();
  };
  const handleDelete = async (id) => {
    const res = await axios.delete(`/api/roles/${id}`);
    if(res.data.message) alert("Error:" + res.data.message)
    fetchData();
  };
  if (status === "unauthenticated")
    return "You need to logged in as an Admin to access this page!";
  return (
    <Container maxW="container.md" className={styles.roleTable}>
      {roleArr.length < 1 ? (
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
          <TableContainer className={styles.roleTabContainer}>
            <Table variant="striped" colorScheme="teal">
              <Thead>
                <Tr>
                  <Th>#</Th>
                  <Th>Name</Th>
                  <Th textAlign={"center"}>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {roleArr?.map((e, index) => (
                  <Tr key={index}>
                    <Td>{index + 1}</Td>
                    <Td>{e.name}</Td>
                    <Td display={"flex"} justifyContent={"space-around"}>
                      <Button
                        disabled={e.name === "Admin"}
                        leftIcon={<EditIcon />}
                        onClick={() => handleEdit(e)}
                        colorScheme="teal"
                        style={{ width: "80px" }}
                      >
                        Edit
                      </Button>
                      <Button
                        disabled={e.name === "Admin"}
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
            <RoleModal
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

export default Roles;

export const getServerSideProps = async (ctx) => {
  return {
    props: {
      session: await getSession(ctx),
    },
  };
};
