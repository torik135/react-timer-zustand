## Timer with ReactJS

# STATUS: ON-PROGRESS

## TODO
- change project list into Radio. [REMOVED]
- use zustand for global state and remove context API. [PROGRESS]
- save active projects (min 1 sec timer) into state. [PROGRESS]
- and export it into csv files.
- create saveStore to save each item(project, time worked, date) per date.
> example:

| Task | Time Worked in | Date Work |
|------|----------------|------------|
| Todo | 01:34:2        | 22/02/2023 |

- add CRUD func to the projects list.
- load csv or json file into the project list.

> format: 
```json
{
  {
    "id": 1, 
    "title": "Make API",
    "desc": "Make API for this project",
    "time": {
      "hour": "0",
      "minute": "0",
      "second": "0"
    }
  },
  {...}
}

```
