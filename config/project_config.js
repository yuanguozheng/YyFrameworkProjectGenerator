module.exports =
{
    "project_name": "Test",
    "package_name": "com.coderyuan.test",
    "organization": "coderyuan.com",
    "jre": "1.8",
    "project_path": {
        "source": "src/main/java",
        "web": "src/main/web"
    },
    "db": {
        "url": "",
        "username": "",
        "password": "",
        "tables": [
            {
                "name": "",
                "columns": [
                    {
                        "name": "",
                        "type": "",
                        "auto-increment": true
                    },
                    {
                        "name": "",
                        "type": "",
                        "default": 0
                    },
                    {
                        "name": "",
                        "type": "",
                        "notnull": false
                    }
                ]
            }
        ]
    },
    "api": [
        {
            "class_name": "HelloController",
            "request_path": "/hello",
            "method": "GET",
            "actions": [
                {
                    "name": "sayHello",
                    "method": "POST",
                    "params": true,
                    "withFile": false
                }
            ]
        }
    ]
};
