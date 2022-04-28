import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Button,
  Center,
  Container,
  Flex,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import { useSession, getSession } from "next-auth/react";
import React, { useState, useEffect } from "react";
import UserModal from "../../components/UserModal";
import styles from "../../styles/User.module.css"
const Users = () => {
  const { data: session } = useSession();
  const [userArr, setUserArr] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalValue, setModalValue] = useState({});
  useEffect(() => {
    if (!session) {
      return setUserArr([]);
    }
    fetchData();
  }, []);

  useEffect(() => {
    onClose();
  }, [userArr]);

  const fetchData = async () => {
    const res = await axios.get("/api/users");
    setUserArr(res.data);
  };
  const handleEdit = (user) => {
    let { departments } = user;
    setModalValue({ ...user, departments: departments.name });
    onOpen();
  };
  const handleDelete = async (id) => {
    await axios.delete(`/api/users/${id}`);
    fetchData();
  };
  return (
    <Flex>
      <Container maxW="100%" className={styles.userTable}>
        {userArr.length < 1 ? (
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
          <TableContainer className={styles.userTabContainer}>
            <Table variant="striped" colorScheme="teal">
              <Thead>
                <Tr>
                  <Th>#</Th>
                  <Th>Full Name</Th>
                  <Th>Email</Th>
                  <Th>Staff ID</Th>
                  <Th>Department</Th>
                  <Th>Roles</Th>
                  <Th textAlign={"center"}>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {userArr?.map((e, index) => (
                  <Tr key={index}>
                    <Td>{index + 1}</Td>
                    <Td>{e.fullName}</Td>
                    <Td>{e.email}</Td>
                    <Td>{e.staffId}</Td>
                    <Td>{e.departments.name}</Td>
                    <Td>{e.roles.map((r) => r.name + " ")}</Td>
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
                        disabled={
                          e.roles.some((u) => u.name === "Admin") &&
                          e.email === session.user.email
                            ? true
                            : false
                        }
                      >
                        Delete
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
            <UserModal
              isOpen={isOpen}
              onClose={onClose}
              modalValue={modalValue}
              fetchData={fetchData}
            />
          </TableContainer>
        )}
      </Container>
    </Flex>
  );
};

export default Users;

export const getServerSideProps = async (ctx) => {
  return {
    props: {
      session: await getSession(ctx),
    },
  };
};
