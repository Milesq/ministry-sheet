import boto3

app_postfix = 'ukr'
# app_postfix = 'dev'
tables_names_to_prune = ['PendingAppointment', 'Appointment']

dynamo = boto3.client('dynamodb', region_name='eu-central-1')


def prune_table(name: str):
    result = dynamo.scan(
        TableName=name,
        FilterExpression='attribute_exists(#d)',
        ExpressionAttributeNames={'#d': '_deleted'}
    )

    for item in result['Items']:
        item_id = item['id']['S']

        dynamo.delete_item(
          TableName=name,
          Key={'id': {'S': item_id}}
        )



if __name__ == '__main__':
    tables = dynamo.list_tables()['TableNames']

    tables = [table for table in tables if table.endswith(app_postfix) and table.split('-')[0] in tables_names_to_prune]

    for table in tables:
        prune_table(table)
