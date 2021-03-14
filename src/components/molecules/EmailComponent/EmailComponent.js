import { Field, Form, Formik } from "formik";
import React from "react";
import styled from "styled-components";

import { RstFlex } from "../../elements/Flex/Flex";
import { RstText } from "../../elements/Text/Text";

const TitleTextDefault = styled(RstText)`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 100%;

  color: #1c1c1c;

  text-transform: uppercase;
`;

const DescriptionTextDefault = styled(TitleTextDefault)`
  text-transform: none;
`;

const onSubmit = () => 10;

const RstEmailComponent = () => {
  return (
    <>
      <Formik onSubmit={onSubmit}>
        {({ isSubmitting }) => (
          <Form noValidate>
            <RstFlex alignItems="center">
              <TitleTextDefault>keep in touch</TitleTextDefault>
            </RstFlex>
            <RstFlex justifyContent="space-between">
              <RstFlex alignItems="center">
                <DescriptionTextDefault>
                  I’m shopping for:
                </DescriptionTextDefault>
              </RstFlex>

              <RstFlex alignItems="center">
                <Field type="checkbox" name="men" />
                <DescriptionTextDefault>Men</DescriptionTextDefault>
              </RstFlex>
              <RstFlex alignItems="center">
                <Field type="checkbox" name="women" />
                <DescriptionTextDefault>Women</DescriptionTextDefault>
              </RstFlex>
            </RstFlex>

            <Field name="email" type />
            <button type="submit">Subscribe</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default RstEmailComponent;
