# READ ME


**Introduction:**



**Instructions**:




| **HTTP Method** | **URL path**           | **Description**                      | **JSON** |
| --------------- | ---------------------- | ------------------------------------ | -------- |
| GET             | `/`                    | Index page                           |          |
| GET             | `/user/list`           | List of Users                        |          |
| GET             | `/user/:id`            | Details of a specific User           |          |
| GET             | `/user/create`         | Create a new User form render        |          |
| POST            | `/user/create`         | Create a new User form handler       |          |
| GET             | `/user/:id/edit`       | Update a specific Ucer form render   |          |
| POST            | `/user/:id/edit`       | Update a specific User form handler  |          |
| DELETE          | `/user/:id`            | Delete a specific User               |          |
| GET             | `/user/login`          | Login form render                    |          |
| POST            | `/user/login`          | Login form handler                   |          |
| POST            | `/user/logout`         | Logout                               |          |
| GET             | `/event/list`          | List of Events                       |          |
| GET             | `/event/:id`           | Deteails of a specific Event         |          |
| GET             | `/event/create`        | Create Event form render             |          |
| POST            | `/event/create`        | Create Event form handler            |          |
| GET             | `/event/:id/edit`      | Update a specific Event form render  |          |
| POST            | `/event/:id/edit`      | Update a specific Event form handler |          |
| DELETE          | `/event/:id`           | Delete a specific Event              |          |
| POST            | `event/suscribe/:id`   | Add Event to my Profile              |          |
| POST            | `event/unsuscribe/:id` | Remove Event from my Profile         |          |
| GET             | `/plants/list`         | List of Plants                       | ✅        |
| GET             | `/plants/details/:id`  | Details of a specific Plant          | ✅?       |
| POST            | `/plant/add/:id`       | Add Plant to my Profile              | ✅?       |
| POST            | `/plant/remove/:id`    | Remove Plant from my Profile         |          |
| GET             | `/api/users`           | User list                            | ✅ ¿?     |
| GET             | `/api/user/:id`        | User details                         | ✅ ¿?     |
| GET             | `/api/maps`            | Event list                           | ✅        |
| GET             | `/api/map/:id`         | Event details                        | ✅        |

