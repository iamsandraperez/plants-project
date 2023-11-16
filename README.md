# READ ME


**Introduction:**



**Instructions**:



| **HTTP Method** | **URL path**            | **Description**                      | **JSON** |
| --------------- | ----------------------- | ------------------------------------ | -------- |
| GET             | `/`                     | Index page                           |          |
| GET             | `/user/list`            | List of Users                        |          |
| GET             | `/user/details/:_id`    | Details of a specific User           |          |
| GET             | `/user/create`          | Create a new User form render        |          |
| POST            | `/user/create`          | Create a new User form handler       |          |
| GET             | `/user/edit/:_id`       | Update a specific Ucer form render   |          |
| POST            | `/user/edit/:_id`       | Update a specific User form handler  |          |
| DELETE          | `/user/delete/:_id`     | Delete a specific User               |          |
| GET             | `/user/login`           | Login form render                    |          |
| POST            | `/user/login`           | Login form handler                   |          |
| POST            | `/user/logout`          | Logout                               |          |
| GET             | `/event/list`           | List of Events                       |          |
| GET             | `/event/:_id`           | Deteails of a specific Event         |          |
| GET             | `/event/create`         | Create Event form render             |          |
| POST            | `/event/create`         | Create Event form handler            |          |
| GET             | `/event/:_id/edit`      | Update a specific Event form render  |          |
| POST            | `/event/:_id/edit`      | Update a specific Event form handler |          |
| DELETE          | `/event/:_id`           | Delete a specific Event              |          |
| POST            | `event/suscribe/:_id`   | Add Event to my Profile              |          |
| POST            | `event/unsuscribe/:_id` | Remove Event from my Profile         |          |
| GET             | `/plants/list`          | List of Plants                       | ✅        |
| GET             | `/plants/details/:_id`  | Details of a specific Plant          | ✅?       |
| POST            | `/plant/add/:id`        | Add Plant to my Profile              | ✅?       |
| POST            | `/plant/remove/:_id`    | Remove Plant from my Profile         |          |
| GET             | `/api/users`            | User list                            | ✅ ¿?     |
| GET             | `/api/user/:_id`        | User details                         | ✅ ¿?     |
| GET             | `/api/maps`             | Event list                           | ✅        |
| GET             | `/api/map/:_id`         | Event details                        | ✅        |