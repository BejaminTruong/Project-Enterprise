import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Box,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
const validationSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  content: Yup.string().required("Required"),
  categoryId: Yup.string().required("Required"),
});
const IdeaModal = ({
  isOpen,
  onClose,
  modalValue,
  fetchData,
  submissionId,
  userId,
  userData,
}) => {
  const [formValues, setFormValues] = useState();
  const formRef = useRef();
  const [categoryArr, setCategoryArr] = useState([]);
  const [document, setDocument] = useState(null);
  const { title, description, content, category, categoryId, anonymous } =
    modalValue;
  useEffect(async () => {
    const categoryList = await axios.get("/api/categories");
    setCategoryArr(categoryList.data);
  }, []);

  useEffect(() => {
    if (Object.keys(modalValue).length === 0) handleAdd();
    else handleSubmit();
  }, [formValues]);

  useEffect(() => {
    console.log(document);
  }, [document]);

  const handleSubmit = async () => {
    if (formValues) {
      if (!formValues.agree)
        return alert("You must agree to the Terms and Conditions to submit");
      const newFormValues = {
        ...formValues,
        categoryId: +formValues.categoryId,
      };
      await axios.put(`/api/ideas/${modalValue.id}`, newFormValues);
      fetchData();
    }
  };
  const handleAdd = async () => {
    if (formValues) {
      if (!formValues.agree)
        return alert("You must agree to the Terms and Conditions to submit");
      const newFormValues = {
        ...formValues,
        categoryId: +formValues.categoryId,
        submissionId,
        userId,
      };
      const formData = new FormData();
      for (let key in newFormValues) {
        formData.append(key, newFormValues[key]);
      }
      formData.append("avatar", document);
      await axios.post(`/api/ideas/create`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      for (let i = 0; i < userData.length; i++) {
        const e = userData[i];
        let templateParams = {
          to_email: e.email,
          from_name: "FPT Greenwich CMS test",
          to_name: e.name,
          message: "A new idea has been submitted",
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
      }
      setDocument(null);
      fetchData();
    }
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Idea</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Formik
              innerRef={formRef}
              initialValues={{
                title,
                description,
                content,
                categoryId,
                agree: false,
                anonymous,
                document: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                setFormValues(values);
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <label className="form-label" htmlFor="title">
                    Title:
                  </label>
                  <Field
                    className="form-control mb-2"
                    type="text"
                    name="title"
                  />
                  {touched.title && errors.title && (
                    <div style={{ color: "red" }}>{errors.title}</div>
                  )}
                  <label className="form-label" htmlFor="description">
                    Description:
                  </label>
                  <Field
                    className="form-control mb-2"
                    type="text"
                    name="description"
                  />
                  {touched.description && errors.description && (
                    <div style={{ color: "red" }}>{errors.description}</div>
                  )}
                  <label className="form-label" htmlFor="content">
                    Content:
                  </label>
                  <Field
                    className="form-control mb-2"
                    type="text"
                    name="content"
                  />
                  {touched.content && errors.content && (
                    <div style={{ color: "red" }}>{errors.content}</div>
                  )}
                  <label htmlFor="categoryId">Category:</label>
                  <Field
                    name="categoryId"
                    as="select"
                    className="form-control my-2"
                  >
                    {category ? (
                      <option defaultValue={categoryId}>{category.name}</option>
                    ) : (
                      <option defaultValue={""}>Choose a category</option>
                    )}
                    {categoryArr.map((c, index) => {
                      if (category) {
                        if (c.name !== category.name)
                          return (
                            <option key={index} value={c.id}>
                              {c.name}
                            </option>
                          );
                      } else {
                        return (
                          <option key={index} value={c.id}>
                            {c.name}
                          </option>
                        );
                      }
                    })}
                  </Field>
                  {touched.categoryId && errors.categoryId && (
                    <div style={{ color: "red" }}>{errors.categoryId}</div>
                  )}
                  <label htmlFor="file">Upload Document:</label>
                  <Field
                    type="file"
                    className="form-control my-2"
                    name="document"
                    onChange={(e) => setDocument(e.target.files[0])}
                  />
                  <Box>
                    <Field type="checkbox" name="agree" />
                    <Text ms={2} as="span">
                      I agree with the Terms and Conditions
                    </Text>
                  </Box>
                  <Box>
                    <Field type="checkbox" name="anonymous" />
                    <Text ms={2} as="span">
                      Submit as anonymous
                    </Text>
                  </Box>
                </Form>
              )}
            </Formik>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              type="submit"
              colorScheme="blue"
              mr={3}
              onClick={() => formRef.current.submitForm()}
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default IdeaModal;
