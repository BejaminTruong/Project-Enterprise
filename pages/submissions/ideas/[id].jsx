import { useEffect, useState } from "react";
import { useSession, getSession } from "next-auth/react";
import axios from "axios";
import {
  Button,
  Container,
  Center,
  Spinner,
  Heading,
  Text,
  Box,
  Flex,
  Avatar,
  Input,
  Divider,
  Checkbox,
  Tag,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { MdThumbUpOffAlt, MdThumbDownOffAlt } from "react-icons/md";
import { useRouter } from "next/router";
import { format } from "date-fns";
import emailjs from "@emailjs/browser";
import styles from "../../../styles/IdeaDetail.module.css";
const Ideas = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: session } = useSession();
  const [ideaData, setIdeaData] = useState({});
  const [commentList, setCommentList] = useState([]);
  const [reacted, setReacted] = useState(null);
  const [flag, setFlag] = useState(false);
  const [cmt, setCmt] = useState("");
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    fetchIdeaData();
  }, []);

  useEffect(async () => {
    if (Object.keys(ideaData).length !== 0) {
      fetchReactionData();
      fetchCommentData();
    }
  }, [ideaData]);

  const fetchIdeaData = async () => {
    const res = await axios.get(`/api/ideas?id=${id}`);
    setIdeaData(res.data);
  };

  const fetchReactionData = async () => {
    setFlag(false)
    const res = await axios.get(
      `/api/ideas/getReactions/${session.user.userId}/${ideaData.id}`
    );
    if (res.data.message) return setFlag(true)
    setReacted(res.data);
  };

  const fetchCommentData = async () => {
    const res = await axios.get(`/api/ideas/getComments/${ideaData.id}`);
    if (res.data.message) return setCommentList([]);
    setCommentList(res.data);
  };

  const handleReaction = async (bool) => {
    if (flag)
      await axios.post("/api/reactions/create", {
        reaction: bool,
        userId: session.user.userId,
        ideaId: ideaData.id,
      });
    else
      await axios.post(`/api/reactions/create?id=${reacted.id}`, {
        reaction: bool,
      });
    fetchReactionData();
  };

  const handleSendCmt = async () => {
    await axios.post("/api/comments/create", {
      content: cmt,
      userId: session.user.userId,
      ideaId: ideaData.id,
      anonymous: checked,
    });
    let templateParams = {
      to_email: ideaData.user.email,
      from_name: "FPT Greenwich CMS test",
      to_name: ideaData.user.fullName,
      message: "Someone just commented on your idea",
    };
    try {
      const result = await emailjs.send(
        "service_2ivd7jg",
        "template_8sgwiur",
        templateParams,
        "DKM5g_ZhMdSbq62O2"
      );
      console.log(result.text);
    } catch (error) {
      console.log(error.text);
      return;
    }
    fetchCommentData();
    setCmt("");
  };

  return (
    <Container maxW="container.md" className={styles.ideaDetailTable}>
      {Object.keys(ideaData).length === 0 ? (
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
        <Container maxW="container.xl" paddingY={5}>
          <Heading textAlign="center">{ideaData.title}</Heading>
          <Box
            fontSize="xl"
            display="flex"
            justifyContent="space-evenly"
            marginTop={5}
          >
            <Box fontWeight="bold">
              <Text>Author:</Text>
              <Text>Description:</Text>
              <Text>Content:</Text>
              <Text>Created Date:</Text>
              <Text>Last Modified Date:</Text>
              <Text>Category:</Text>
              <Text>File:</Text>
            </Box>
            <Box>
              <Text>
                {!ideaData.anonymous ? ideaData.user.fullName : "Anonymous"}
              </Text>
              <Text>{ideaData.description}</Text>
              <Text>{ideaData.content}</Text>
              <Text>
                {format(Date.parse(ideaData.createdDate), "yyyy-MM-dd")}
              </Text>
              <Text>
                {format(Date.parse(ideaData.lastModifiedDate), "yyyy-MM-dd")}
              </Text>
              <Text>{ideaData.category.name}</Text>
            </Box>
          </Box>
          {ideaData ? (
            <Box className={styles.ideaReaction}>
              <Button
                style={{ width: "80px" }}
                colorScheme="facebook"
                variant={reacted?.reaction ? "solid" : "outline"}
                onClick={() => handleReaction(true)}
              >
                <Icon as={MdThumbUpOffAlt} />
                Like
              </Button>
              <Button
                style={{ width: "80px" }}
                colorScheme="red"
                variant={reacted?.reaction === false ? "solid" : "outline"}
                onClick={() => handleReaction(false)}
              >
                <Icon as={MdThumbDownOffAlt} />
                Dislike
              </Button>
            </Box>
          ) : (
            <Center paddingTop={"5%"}>
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="sm"
              />
            </Center>
          )}
          {Date.parse(ideaData.submission.finalClosureDate) <= Date.now() ? (
            <Box display="flex" justifyContent="center">
              <Tag my={5} size="md" variant="solid" colorScheme="orange">
                Comment is closed
              </Tag>
            </Box>
          ) : (
            <Flex mt={5} className={styles.ideaSendComment}>
              <Input
                value={cmt}
                onChange={(e) => setCmt(e.target.value)}
                placeholder="Your comment..."
                size="lg"
              />
              <Checkbox
                mx={2}
                colorScheme="green"
                onChange={(e) => setChecked(e.target.checked)}
              >
                comment as anonymous
              </Checkbox>
              <Button
                type="submit"
                onClick={handleSendCmt}
                colorScheme="twitter"
                size="lg"
              >
                Send
              </Button>
            </Flex>
          )}
          {commentList.length < 1 ? null : (
            <>
              {commentList?.map((e, index) => (
                <Box key={index}>
                  <Flex my={5}>
                    <Avatar
                      name={!e.anonymous ? e.user.fullName : "Anonymous"}
                      src={!e.anonymous ? e.user.avatar : null}
                    />
                    <Box ml="3">
                      <Text fontWeight="bold">
                        {!e.anonymous ? e.user.fullName : "Anonymous"} -{" "}
                        <span style={{ fontWeight: "100", fontSize: "12px" }}>
                          posted at{" "}
                          {format(
                            Date.parse(e.createdDate),
                            "yyyy-MM-dd HH:mm:ss"
                          )}
                        </span>
                      </Text>
                      <Text fontSize="md">{e.content}</Text>
                    </Box>
                  </Flex>
                  <Divider />
                </Box>
              ))}
            </>
          )}
        </Container>
      )}
    </Container>
  );
};

export default Ideas;

export const getServerSideProps = async (ctx) => {
  return {
    props: {
      session: await getSession(ctx),
    },
  };
};
