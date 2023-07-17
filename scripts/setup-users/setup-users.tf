variable "user_name" {
  type = string
  default = "adminuser"
}

resource "random_password" "pass" {
  length = 16
  special = false
}

output "password" {
  value = random_password.pass.result
  sensitive = true
}

resource "aws_cognito_user" "name" {
  user_pool_id = local.user_pool_id
  username = var.user_name
  password = random_password.pass.result
  attributes = {
    "name" = "Display Name"
  }
}

resource "aws_cognito_user_in_group" "name" {
  user_pool_id = local.user_pool_id
  username = var.user_name
  group_name = "admins"
  depends_on = [ aws_cognito_user.name ]
}
