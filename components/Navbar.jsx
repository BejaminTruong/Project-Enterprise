import React from "react";
import { useSession, signOut, signIn } from "next-auth/react";
import { Avatar, AvatarBadge, Box, Button, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css"
const Navbar = () => {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <nav className="navbar navbar-expand-lg navbar-light text-light" style={{backgroundColor: "teal"}}>
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="/">
          Home
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {session && (
              <li className="nav-item">
                <a
                  className="nav-link active text-light"
                  aria-current="page"
                  href="/submissions"
                >
                  Submissions
                </a>
              </li>
            )}
            {session?.user.roles.some((e) => e.name === "Manager") && (
              <li className="nav-item">
                <a
                  className="nav-link active text-light"
                  aria-current="page"
                  href="/categories"
                >
                  Categories
                </a>
              </li>
            )}
            {session?.user.roles.some((e) => e.name === "Admin") && (
              <>
                <li className="nav-item">
                  <a
                    className="nav-link active text-light"
                    aria-current="page"
                    href="/users"
                  >
                    Users
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active text-light"
                    aria-current="page"
                    href="/departments"
                  >
                    Departments
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active text-light"
                    aria-current="page"
                    href="/roles"
                  >
                    Roles
                  </a>
                </li>
              </>
            )}
          </ul>
          {session ? (
            <>
              <Flex className={styles.userAvatar}>
                <Avatar name={session.user.name} src={session.user.image}>
                  <AvatarBadge boxSize="1.25em" bg="green.500" />
                </Avatar>
                <Box ml="3">
                  <Text fontWeight="bold">{session.user.name}</Text>
                  <Text fontSize="sm">
                    {session.user.roles.map((e) => e.name + " ")}
                  </Text>
                </Box>
              </Flex>
              <Button
                colorScheme="red"
                className="mx-2"
                onClick={() => signOut({ callbackUrl: "/" })}
              >
                LogOut
              </Button>
              {session?.user.roles.some((e) => e.name === "Admin") ? (
                <Button
                  onClick={() => router.push("/auth/signup")}
                  colorScheme="blue"
                >
                  Create new account
                </Button>
              ) : null}
            </>
          ) : (
            <>
              <Button
                colorScheme="green"
                onClick={() => signIn("null", { callbackUrl: "/" })}
              >
                SignIn
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
