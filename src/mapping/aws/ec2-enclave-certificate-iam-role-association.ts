/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { Ec2EnclaveCertificateIamRoleAssociation } from "../../aws/ec2-enclave-certificate-iam-role-association";
import { createGuessingResourceMapper } from "../helper";
import { registerMapping } from "../index";

registerMapping("AWS::EC2::EnclaveCertificateIamRoleAssociation", {
  resource: createGuessingResourceMapper(Ec2EnclaveCertificateIamRoleAssociation),
  attributes: {
    CertificateArn: (association: Ec2EnclaveCertificateIamRoleAssociation) => association.certificateArn,
    RoleArn: (association: Ec2EnclaveCertificateIamRoleAssociation) => association.roleArn,
  },
});
