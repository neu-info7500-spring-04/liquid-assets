Displays all assets from liquid fetched from a specified API endpoint.

Displays asset name, ticker, total supply, and issuer domain.

# API Endpoint:
https://blockstream.info/liquid/api/assets/registry?sort_field=name

# Description:
## Query string parameters:
### start_index: 
The start index to use for paging. defaults to 0.
### limit: 
Maximum number of assets to return. defaults to 25, maximum 100.
### sort_field: 
Field to sort assets by. one of name, ticker or domain. defaults to ticker.
### sort_dir: 
Sorting direction. one of asc or desc. defaults to asc.

# Sample Output:
    {
        "name":"$Capland",
        "ticker": "CAPL",
        "totalSupply": 1165456160,
        "domain": "techenize.com"
    }
# Installation:
### Node modules:
npm install.
### Run
npm start
# License:
This project is licensed under the MIT License - see the LICENSE file for details.
