# Endpoints

#   

<details>
<summary><span>/config</span></summary>
<details>
 <summary>
    <span class="blue">GET</span> <code><b>/config/general</b></code> (retrieves the general config)
</summary>

##### Responses

> | http code | response                                                                                                                         |
> |-----------|----------------------------------------------------------------------------------------------------------------------------------|
> | 200       | ``` { server: {}, theme: { company_name: string, icon_path: path }, logging: { max_level: (TRACE/DEBUG/INFO/WARN/ERROR)? } } ``` |
</details>

<details>
 <summary>
    <span class="blue">GET</span> <code><b>/config/admin</b></code> (retrieves the admin config)
</summary>

##### Responses

> | http code | response                                                    |
> |-----------|-------------------------------------------------------------|
> | 200       | ``` { credentials: { password: string, hash: string } } ``` |
</details>

<details>
 <summary>
    <span class="orange">POST</span> <code><b>/config/change</b></code> (change a running config)
</summary>

### Body

> | name  | type     | data type | description                                 |
> |-------|----------|-----------|---------------------------------------------|
> | path  | required | string    | The config path (see in configuration port) |
> | value | required | any       | The new value                               |

##### Responses

> | http code | response  |
> |-----------|-----------|
> | 200       | OK        |
> | 404       | NOT FOUND |
</details>
</details>

<details>
<summary><span>/theme</span></summary>
<details>
 <summary>
    <span class="blue">GET</span> <code><b>/theme/company_name</b></code> (retrieve the company name)
</summary>

##### Responses

> | http code | response     |
> |-----------|--------------|
> | 200       | company_name |
</details>

<details>
 <summary>
    <span class="blue">GET</span> <code><b>/theme/icon</b></code> (retrieve the company icon)
</summary>

##### Responses

> | http code | response |
> |-----------|----------|
> | 200       | icon     |
</details>
</details>

<details>
<summary><span>/files</span></summary>
<details>
 <summary>
    <span class="blue">GET</span> <code><b>/files/structure/**</b></code> (retrieve entries inside a folder)
</summary>

##### Responses

> | http code | response                             |
> |-----------|--------------------------------------|
> | 200       | { name: string, is_file: boolean }[] |
> | 404       | NOT FOUND                            |
</details>

<details>
 <summary>
    <span class="blue">GET</span> <code><b>/files/serve/**</b></code> (retrieve a file in the repository)
</summary>

##### Responses

> | http code | response  |
> |-----------|-----------|
> | 200       | file      |
> | 404       | NOT FOUND |
</details>

<details>
 <summary>
    <span class="orange">POST</span> <code><b>/files/repository/file/**</b></code> (upload a new file)
</summary>

##### Responses

> | http code | response  |
> |-----------|-----------|
> | 200       | OK        |
> | 404       | NOT FOUND |
</details>

<details>
 <summary>
    <span class="red">DELETE</span> <code><b>/files/repository/file/**</b></code> (delete a file in the repository)
</summary>

##### Responses

> | http code | response  |
> |-----------|-----------|
> | 200       | OK        |
> | 404       | NOT FOUND |
</details>

<details>
 <summary>
    <span class="orange">POST</span> <code><b>/files/repository/dir/**</b></code> (create a directory in the repository)
</summary>

##### Responses

> | http code | response  |
> |-----------|-----------|
> | 200       | OK        |
> | 404       | NOT FOUND |
</details>

<details>
 <summary>
    <span class="red">DELETE</span> <code><b>/files/repository/dir/**</b></code> (delete a directory in the repository)
</summary>

##### Responses

> | http code | response  |
> |-----------|-----------|
> | 200       | OK        |
> | 404       | NOT FOUND |
</details>
</details>