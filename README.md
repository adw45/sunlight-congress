# Sunlight Congress - Name Pending

## Vision

## Architecture

### Frontend

### Backend 

| | URL | Notes | Sample Call |
| - | - | - | - | 
| votesById | `{baseUrl}/votes/{id}` | Id = Roll_Id | `http://localhost:3000/votes/s102-2017` |
| votesByChamber | `{baseUrl}/votes/chamber/{chamber}` | | `http://localhost:3000/votes/chamber/senate` | 
| legislator | `{baseUrl}/legislator?search=<legislators name>`| Must include `?search=` to get any results | `http://localhost:3000/legislator?search=warren` | 
| legislatorByID | `{baseUrl}/legislator/{id}` | id = bioguide_id | `http://localhost:3000/legislator/D000626`
| legislatorByZip | `{baseUrl}/zip/{zip}` | | `http://localhost:3000/legislator/zip/15060` | 

## Development Process
