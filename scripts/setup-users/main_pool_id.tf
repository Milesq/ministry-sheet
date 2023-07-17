locals {
  cli_inputs = one(fileset(path.module, "../../amplify/backend/auth/ministrysheet*/cli-inputs.json"))
  user_pool_name = jsondecode(file(local.cli_inputs)).cognitoConfig.userPoolName
}

data "aws_cognito_user_pools" "main_pool" {
  name = "ministrysheetbe198505_userpool_be198505-dev"
}

locals {
  user_pool_id = data.aws_cognito_user_pools.main_pool.ids[0]
}
