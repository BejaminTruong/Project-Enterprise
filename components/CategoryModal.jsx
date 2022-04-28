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
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  description: Yup.string().required("Required")
});
const CategoryModal = ({ isOpen, onClose, modalValue, fetchData }) => {
  const [formValues, setFormValues] = useState();
  const formRef = useRef();
  useEffect(() => {
    if (Object.keys(modalValue).length === 0) handleAdd();
    else handleSubmit();
  }, [formValues]);

  const handleSubmit = async () => {
    if (formValues) {
      await axios.put(`/api/categories/${modalValue.id}`, formValues);
      fetchData();
    }
  };
  const handleAdd = async () => {
    if (formValues) {
      await axios.post(`/api/categories/create`, formValues);
      fetchData();
    }
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Category</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Formik
              innerRef={formRef}
              initialValues={{
                name: modalValue ? modalValue.name : "",
                description: modalValue ? modalValue.description : "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                setFormValues(values);
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <label className="form-label" htmlFor="name">
                    Name:
                  </label>
                  <Field className="form-control" type="text" name="name" />
                  {touched.name && errors.name && (
                    <div style={{ color: "red" }}>{errors.name}</div>
                  )}
                  <label className="form-label" htmlFor="description">
                    Description:
                  </label>
                  <Field className="form-control" type="text" name="description" />
                  {touched.description && errors.description && (
                    <div style={{ color: "red" }}>{errors.description}</div>
                  )}
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

export default CategoryModal;
