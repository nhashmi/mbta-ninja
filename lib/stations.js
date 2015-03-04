currentLine = function() {
  return Router.current().params.line;
};

currentStations = function () {
  return stations[currentLine()];
};

stations = {
  "Red Line - Northbound": [
    {name: 'Alewife'},
    {name: 'Davis'},
    {name: 'Porter Square'},
    {name: 'Harvard Square'},
    {name: 'Central Square'},
    {name: 'Kendall'},
    {name: 'Charles/MGH'},
    {name: 'Park Street'},
    {name: 'Downtown Crossing'},
    {name: 'South Station'},
    {name: 'Broadway'},
    {name: 'Andrew'},
    {name: 'JFK/UMass'},
    {name: 'North Quincy'},
    {name: 'Wollaston'},
    {name: 'Quincy Center'},
    {name: 'Quincy Adams'},
    {name: 'Braintree'},
    {name: 'Savin Hill'},
    {name: 'Fields Corner'},
    {name: 'Shawmut'},
    {name: 'Ashmont'}
  ],
  "Red Line - Southbound": [
    {name: 'Alewife'},
    {name: 'Davis'},
    {name: 'Porter Square'},
    {name: 'Harvard Square'},
    {name: 'Central Square'},
    {name: 'Kendall'},
    {name: 'Charles/MGH'},
    {name: 'Park Street'},
    {name: 'Downtown Crossing'},
    {name: 'South Station'},
    {name: 'Broadway'},
    {name: 'Andrew'},
    {name: 'JFK/UMass'},
    {name: 'North Quincy'},
    {name: 'Wollaston'},
    {name: 'Quincy Center'},
    {name: 'Quincy Adams'},
    {name: 'Braintree'},
    {name: 'Savin Hill'},
    {name: 'Fields Corner'},
    {name: 'Shawmut'},
    {name: 'Ashmont'}
  ],
  "Orange Line - Northbound": [
    {name: "Oak Grove"},
    {name: "Malden Center"},
    {name: "Wellington"},
    {name: "Assembly"},
    {name: "Sullivan Square"},
    {name: "Community College"},
    {name: "North Station"},
    {name: "Haymarket"},
    {name: "State Street"},
    {name: "Downtown Crossing"},
    {name: "Chinatown"},
    {name: "Tufts Medical Center"},
    {name: "Back Bay"},
    {name: "Massachusetts Ave."},
    {name: "Ruggles"},
    {name: "Roxbury Crossing"},
    {name: "Jackson Square"},
    {name: "Stony Brook"},
    {name: "Green Street"},
    {name: "Forest Hills"}
  ],
  "Orange Line - Southbound": [
    {name: "Oak Grove"},
    {name: "Malden Center"},
    {name: "Wellington"},
    {name: "Assembly"},
    {name: "Sullivan Square"},
    {name: "Community College"},
    {name: "North Station"},
    {name: "Haymarket"},
    {name: "State Street"},
    {name: "Downtown Crossing"},
    {name: "Chinatown"},
    {name: "Tufts Medical Center"},
    {name: "Back Bay"},
    {name: "Massachusetts Ave."},
    {name: "Ruggles"},
    {name: "Roxbury Crossing"},
    {name: "Jackson Square"},
    {name: "Stony Brook"},
    {name: "Green Street"},
    {name: "Forest Hills"}
  ],
  "Blue Line - Northbound": [
    {name: 'Wonderland'},
    {name: 'Revere Beach'},
    {name: 'Beachmont'},
    {name: 'Suffolk Downs'},
    {name: 'Orient Heights'},
    {name: 'Wood Island'},
    {name: 'Airport'},
    {name: 'Maverick'},
    {name: 'Aquarium'},
    {name: 'State'},
    {name: 'Bowdoin'}
  ],
  "Blue Line - Southbound": [
    {name: 'Wonderland'},
    {name: 'Revere Beach'},
    {name: 'Beachmont'},
    {name: 'Suffolk Downs'},
    {name: 'Orient Heights'},
    {name: 'Wood Island'},
    {name: 'Airport'},
    {name: 'Maverick'},
    {name: 'Aquarium'},
    {name: 'State'},
    {name: 'Bowdoin'}
  ],
  "Green Line B - Westbound": [
    {name: "Park Street"},
    {name: "Boylston"},
    {name: "Arlington"},
    {name: "Copley"},
    {name: "Hynes Convention Center"},
    {name: "Kenmore"},
    {name: "Blandford Street"},
    {name: "Boston Univ. East"},
    {name: "Boston Univ. Central"},
    {name: "Boston Univ. West"},
    {name: "Saint Paul Street"},
    {name: "Pleasant Street"},
    {name: "Babcock Street"},
    {name: "Packards Corner"},
    {name: "Harvard Ave."},
    {name: "Griggs Street"},
    {name: "Allston Street"},
    {name: "Warren Street"},
    {name: "Washington Street"},
    {name: "Sutherland Road"},
    {name: "Chiswick Road"},
    {name: "Chestnut Hill Ave."},
    {name: "South Street"},
    {name: "Boston College"}
  ],
  "Green Line B - Eastbound": [
    {name: "Park Street"},
    {name: "Boylston"},
    {name: "Arlington"},
    {name: "Copley"},
    {name: "Hynes Convention Center"},
    {name: "Kenmore"},
    {name: "Blandford Street"},
    {name: "Boston Univ. East"},
    {name: "Boston Univ. Central"},
    {name: "Boston Univ. West"},
    {name: "Saint Paul Street"},
    {name: "Pleasant Street"},
    {name: "Babcock Street"},
    {name: "Packards Corner"},
    {name: "Harvard Ave."},
    {name: "Griggs Street"},
    {name: "Allston Street"},
    {name: "Warren Street"},
    {name: "Washington Street"},
    {name: "Sutherland Road"},
    {name: "Chiswick Road"},
    {name: "Chestnut Hill Ave."},
    {name: "South Street"},
    {name: "Boston College"}
  ],
  "Green Line C - Westbound": [
    {name: "North Station"},
    {name: "Haymarket"},
    {name: "Park Street"},
    {name: "Boylston"},
    {name: "Arlington"},
    {name: "Copley"},
    {name: "Hynes Convention Center"},
    {name: "Kenmore"},
    {name: "Saint Mary Street"},
    {name: "Hawes Street"},
    {name: "Kent Street"},
    {name: "Saint Paul Street"},
    {name: "Coolidge Corner"},
    {name: "Summit Ave."},
    {name: "Brandon Hall"},
    {name: "Fairbanks Street"},
    {name: "Washington Square"},
    {name: "Tappan Street"},
    {name: "Dean Road"},
    {name: "Englewood Ave."},
    {name: "Cleveland Circle"}
  ],
  "Green Line C - Eastbound": [
    {name: "North Station"},
    {name: "Haymarket"},
    {name: "Park Street"},
    {name: "Boylston"},
    {name: "Arlington"},
    {name: "Copley"},
    {name: "Hynes Convention Center"},
    {name: "Kenmore"},
    {name: "Saint Mary Street"},
    {name: "Hawes Street"},
    {name: "Kent Street"},
    {name: "Saint Paul Street"},
    {name: "Coolidge Corner"},
    {name: "Summit Ave."},
    {name: "Brandon Hall"},
    {name: "Fairbanks Street"},
    {name: "Washington Square"},
    {name: "Tappan Street"},
    {name: "Dean Road"},
    {name: "Englewood Ave."},
    {name: "Cleveland Circle"}
  ],
  "Green Line D - Westbound": [
    {name: "Park Street"},
    {name: "Boylston"},
    {name: "Arlington"},
    {name: "Copley"},
    {name: "Hynes Convention Center"},
    {name: "Kenmore"},
    {name: "Fenway"},
    {name: "Longwood"},
    {name: "Brookline Village"},
    {name: "Brookline Hills"},
    {name: "Beaconsfield"},
    {name: "Reservoir"},
    {name: "Chestnut Hill"},
    {name: "Newton Centre"},
    {name: "Newton Highlands"},
    {name: "Eliot"},
    {name: "Waban"},
    {name: "Woodland"},
    {name: "Riverside"}
  ],
  "Green Line D - Eastbound": [
    {name: "Park Street"},
    {name: "Boylston"},
    {name: "Arlington"},
    {name: "Copley"},
    {name: "Hynes Convention Center"},
    {name: "Kenmore"},
    {name: "Fenway"},
    {name: "Longwood"},
    {name: "Brookline Village"},
    {name: "Brookline Hills"},
    {name: "Beaconsfield"},
    {name: "Reservoir"},
    {name: "Chestnut Hill"},
    {name: "Newton Centre"},
    {name: "Newton Highlands"},
    {name: "Eliot"},
    {name: "Waban"},
    {name: "Woodland"},
    {name: "Riverside"}
  ],
  "Green Line E - Westbound": [
    {name: "Lechmere"},
    {name: "Science Park"},
    {name: "North Station"},
    {name: "Haymarket"},
    {name: "Park Street"},
    {name: "Boylston"},
    {name: "Arlington"},
    {name: "Copley"},
    {name: "Prudential"},
    {name: "Symphony"},
    {name: "Northeastern University"},
    {name: "Museum of Fine Arts"},
    {name: "Longwood Medical Area"},
    {name: "Brigham Circle"},
    {name: "Fenwood Road"},
    {name: "Mission Park"},
    {name: "Riverway"},
    {name: "Back of the Hill"},
    {name: "Heath Street"}
  ],
  "Green Line E - Eastbound": [
    {name: "Lechmere"},
    {name: "Science Park"},
    {name: "North Station"},
    {name: "Haymarket"},
    {name: "Park Street"},
    {name: "Boylston"},
    {name: "Arlington"},
    {name: "Copley"},
    {name: "Prudential"},
    {name: "Symphony"},
    {name: "Northeastern University"},
    {name: "Museum of Fine Arts"},
    {name: "Longwood Medical Area"},
    {name: "Brigham Circle"},
    {name: "Fenwood Road"},
    {name: "Mission Park"},
    {name: "Riverway"},
    {name: "Back of the Hill"},
    {name: "Heath Street"}
  ],
  "Needham Line - Inbound": [
    {name: "Needham Heights"},
    {name: "Needham Center"},
    {name: "Needham Junction"},
    {name: "Hersey"},
    {name: "West Roxbury"},
    {name: "Highland"},
    {name: "Bellevue"},
    {name: "Roslindale Village"},
    {name: "Forest Hills"},
    {name: "Ruggles"},
    {name: "Back Bay"},
    {name: "South Station"}
  ],
  "Needham Line - Outbound": [
    {name: "Needham Heights"},
    {name: "Needham Center"},
    {name: "Needham Junction"},
    {name: "Hersey"},
    {name: "West Roxbury"},
    {name: "Highland"},
    {name: "Bellevue"},
    {name: "Roslindale Village"},
    {name: "Forest Hills"},
    {name: "Ruggles"},
    {name: "Back Bay"},
    {name: "South Station"}
  ],
  "Fitchburg Line - Inbound": [
    {name: "Wachusett"},
    {name: "Fitchburg"},
    {name: "N. Leominster"},
    {name: "Shirley"},
    {name: "Ayer"},
    {name: "Littleton/495"},
    {name: "S. Acton"},
    {name: "W. Concord"},
    {name: "Concord"},
    {name: "Lincoln"},
    {name: "Silver Hill"},
    {name: "Hastings"},
    {name: "Kendal Green"},
    {name: "Brandeis/Roberts"},
    {name: "Waltham"},
    {name: "Waverley"},
    {name: "Belmont"},
    {name: "Porter Sq."},
    {name: "North Station"}
  ],
  "Fitchburg Line - Outbound": [
    {name: "Wachusett"},
    {name: "Fitchburg"},
    {name: "N. Leominster"},
    {name: "Shirley"},
    {name: "Ayer"},
    {name: "Littleton/495"},
    {name: "S. Acton"},
    {name: "W. Concord"},
    {name: "Concord"},
    {name: "Lincoln"},
    {name: "Silver Hill"},
    {name: "Hastings"},
    {name: "Kendal Green"},
    {name: "Brandeis/Roberts"},
    {name: "Waltham"},
    {name: "Waverley"},
    {name: "Belmont"},
    {name: "Porter Sq."},
    {name: "North Station"}
  ],
  "Worcester Line - Inbound": [
    {name: "Worcester"},
    {name: "Grafton"},
    {name: "Westborough"},
    {name: "Southborough"},
    {name: "Ashland"},
    {name: "Framingham"},
    {name: "W. Natick"},
    {name: "Natick Center"},
    {name: "Wellesley Sq."},
    {name: "Wellesley Hills"},
    {name: "Wellesley Farms"},
    {name: "Auburndale"},
    {name: "W. Newton"},
    {name: "Newtonville"},
    {name: "Yawkey"},
    {name: "Back Bay"},
    {name: "South Station"}
  ],
  "Worcester Line - Outbound": [
    {name: "Worcester"},
    {name: "Grafton"},
    {name: "Westborough"},
    {name: "Southborough"},
    {name: "Ashland"},
    {name: "Framingham"},
    {name: "W. Natick"},
    {name: "Natick Center"},
    {name: "Wellesley Sq."},
    {name: "Wellesley Hills"},
    {name: "Wellesley Farms"},
    {name: "Auburndale"},
    {name: "W. Newton"},
    {name: "Newtonville"},
    {name: "Yawkey"},
    {name: "Back Bay"},
    {name: "South Station"}
  ]
};
