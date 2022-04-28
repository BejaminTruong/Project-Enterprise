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
import MultiSelectRoles from "./MultiSelectRoles";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  fullName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  staffId: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  departmentId: Yup.string().required("Required"),
});
const UserModal = ({ isOpen, onClose, modalValue, fetchData }) => {
  const { id, fullName, email, staffId, departments, departmentId, roles } =
    modalValue;
  const [formValues, setFormValues] = useState();
  const [departmentList, setDepartmentList] = useState([]);
  const [roleList, setRoleList] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const formRef = useRef();
  useEffect(async () => {
    const resultData = await Promise.all([
      axios.get("/api/departments"),
      axios.get("/api/roles"),
    ]);
    setDepartmentList(resultData[0].data);
    setRoleList(resultData[1].data);
  }, []);
  useEffect(() => {
    handleSubmit();
    setSelectedOptions([]);
  }, [formValues]);

  const handleSubmit = async () => {
    if (formValues) {
      const newFormValue = {
        ...formValues,
        departmentId: +formValues.departmentId,
        roles: selectedOptions,
      };
      await axios.put(`/api/users/${id}`, newFormValue);
      fetchData();
    }
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit User Information</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Formik
              innerRef={formRef}
              initialValues={{
                fullName,
                email,
                staffId,
                departmentId,
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                setFormValues(values);
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <label className="form-label" htmlFor="email">
                    Email:
                  </label>
                  <Field
                    disabled
                    className="form-control"
                    type="email"
                    name="email"
                  />
                  <label className="form-label" htmlFor="fullName">
                    Full Name:
                  </label>
                  <Field className="form-control" type="text" name="fullName" />
                  {touched.fullName && errors.fullName && (
                    <div style={{ color: "red" }}>{errors.fullName}</div>
                  )}
                  <label className="form-label" htmlFor="staffId">
                    Staff ID:
                  </label>
                  <Field className="form-control" type="text" name="staffId" />
                  {touched.staffId && errors.staffId && (
                    <div style={{ color: "red" }}>{errors.staffId}</div>
                  )}
                  <label className="form-label" htmlFor="departments">
                    Department Name:
                  </label>
                  <Field
                    className="form-control"
                    as="select"
                    name="departmentId"
                  >
                    <option defaultValue={departmentId}>{departments}</option>
                    {departmentList.map((d, index) => {
                      if (d.name !== departments)
                        return (
                          <option key={index} value={d.id}>
                            {d.name}
                          </option>
                        );
                    })}
                  </Field>
                  {touched.departmentId && errors.departmentId && (
                    <div style={{ color: "red" }}>{errors.departmentId}</div>
                  )}
                  <label className="form-label" htmlFor="roles">
                    Roles:
                  </label>
                  <MultiSelectRoles
                    label="Assign roles"
                    options={roleList.map((r) => ({ id: r.id, name: r.name }))}
                    selectedOptions={selectedOptions}
                    setSelectedOptions={setSelectedOptions}
                  />
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

export default UserModal;
