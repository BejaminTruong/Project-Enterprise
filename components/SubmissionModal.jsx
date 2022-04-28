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
  forwardRef,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
});
const SubmissionModal = ({ isOpen, onClose, modalValue, fetchData }) => {
  const [formValues, setFormValues] = useState();
  const [startClosureDate, setStartClosureDate] = useState(new Date());
  const [startFinalClosureDate, setStartFinalClosureDate] = useState(
    new Date()
  );
  const formRef = useRef();
  const CustomDatePicker = forwardRef(({ value, onClick }, ref) => (
    <Button colorScheme="teal" onClick={onClick} ref={ref}>
      {value}
    </Button>
  ));

  useEffect(() => {
    if (Object.keys(modalValue).length === 0) handleAdd();
    else handleSubmit();
  }, [formValues]);

  const handleSubmit = async () => {
    if (formValues) {
      let newFormValues = {
        ...formValues,
        closureDate: format(startClosureDate, "yyyy-MM-dd"),
        finalClosureDate: format(startFinalClosureDate, "yyyy-MM-dd"),
      };
      await axios.put(`/api/submissions/${modalValue.id}`, newFormValues);
      fetchData();
    }
  };
  const handleAdd = async () => {
    if (formValues) {
      let newFormValues = {
        ...formValues,
        closureDate: format(startClosureDate, "yyyy-MM-dd"),
        finalClosureDate: format(startFinalClosureDate, "yyyy-MM-dd"),
      };
      await axios.post(`/api/submissions/create`, newFormValues);
      fetchData();
    }
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Submission</ModalHeader>
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
                  <Field
                    className="form-control"
                    type="text"
                    name="description"
                  />
                  {touched.description && errors.description && (
                    <div style={{ color: "red" }}>{errors.description}</div>
                  )}
                  <label className="form-label" htmlFor="closureDate">
                    Closure Date:
                  </label>
                  <DatePicker
                    dateFormat="yyyy-MM-dd"
                    selected={startClosureDate}
                    onChange={(date) => setStartClosureDate(date)}
                    customInput={<CustomDatePicker />}
                  />
                  <label className="form-label" htmlFor="finalClosureDate">
                    Final Closure Date:
                  </label>
                  <DatePicker
                    dateFormat="yyyy-MM-dd"
                    selected={startFinalClosureDate}
                    onChange={(date) => setStartFinalClosureDate(date)}
                    customInput={<CustomDatePicker />}
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

export default SubmissionModal;
