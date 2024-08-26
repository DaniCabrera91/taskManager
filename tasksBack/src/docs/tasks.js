module.exports = {
    paths: {
        '/tasks': {
            post: {
                tags: ['Tasks'],
                summary: 'Create a new task',
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/TaskInput',
                            },
                        },
                    },
                },
                responses: {
                    201: {
                        description: 'Task created successfully',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Task',
                                },
                            },
                        },
                    },
                    400: {
                        description: 'Bad request (invalid input)',
                    },
                    500: {
                        description: 'Server error',
                    },
                },
            },
            get: {
                tags: ['Tasks'],
                summary: 'Get all tasks',
                responses: {
                    200: {
                        description: 'Tasks were obtained',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'array',
                                    items: {
                                        $ref: '#/components/schemas/Task',
                                    },
                                },
                            },
                        },
                    },
                    500: {
                        description: 'Server error',
                    },
                },
            },
        },
        '/tasks/{taskId}': {
            get: {
                tags: ['Tasks'],
                summary: 'Get a task by ID',
                parameters: [
                    {
                        name: 'taskId',
                        in: 'path',
                        required: true,
                        description: 'ID of the task',
                        schema: {
                            type: 'string',
                            format: 'uuid',
                        },
                    },
                ],
                responses: {
                    200: {
                        description: 'Task retrieved successfully',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Task',
                                },
                            },
                        },
                    },
                    404: {
                        description: 'Task not found',
                    },
                    500: {
                        description: 'Server error',
                    },
                },
            },
            put: {
                tags: ['Tasks'],
                summary: 'Update a task by ID',
                parameters: [
                    {
                        name: 'taskId',
                        in: 'path',
                        required: true,
                        description: 'ID of the task',
                        schema: {
                            type: 'string',
                            format: 'uuid',
                        },
                    },
                ],
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/TaskInput',
                            },
                        },
                    },
                },
                responses: {
                    200: {
                        description: 'Task updated successfully',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Task',
                                },
                            },
                        },
                    },
                    400: {
                        description: 'Bad request (invalid input)',
                    },
                    404: {
                        description: 'Task not found',
                    },
                    500: {
                        description: 'Server error',
                    },
                },
            },
            delete: {
                tags: ['Tasks'],
                summary: 'Delete a task by ID',
                parameters: [
                    {
                        name: 'taskId',
                        in: 'path',
                        required: true,
                        description: 'ID of the task',
                        schema: {
                            type: 'string',
                            format: 'uuid',
                        },
                    },
                ],
                responses: {
                    200: {
                        description: 'Task deleted successfully',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        message: {
                                            type: 'string',
                                            description: 'Task deleted successfully',
                                        },
                                    },
                                },
                            },
                        },
                    },
                    404: {
                        description: 'Task not found',
                    },
                    500: {
                        description: 'Server error',
                    },
                },
            },
        },
    },
};