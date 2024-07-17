const mapMediaInfo = [
/*                                     LeftRight UpDown      LeftRight    UpDown       LeftRight   UpDown      LeftRight    UpDown       LeftRight    UpDown     */
['Key' , 'KeyV' , 'Video#', 'Photo#', 'WhereR', 'WhereCpx', 'WhatMagR%', 'WhatMagC%', 'VidRowLR', 'VidColUP', 'MapRowLR' , 'MapColUD' , 'PicRowLR%', 'PicColUPpx', 'Title'      ],  
['1'   ,  '1'   , '01a'   , '01'    , '56%'   , '130px'   , '55%'      , '58%'      , '300'     , '200'     ,   '5'      ,   '7'      ,  '80'      , '180'       , '1a - Love'   ], 
['2'   ,  '3'   , '02a'   , '02'    , '30%'   ,  '80px'   , '28%'      , '32%'      , '50%'     , '80px'    ,   '5'      ,   '7'      , '130'      , '200'       , '2a - Museum' ],
['3'   ,  '7'   , '03a'   , '03'    , '37%'   ,  '98px'   , '30%'      , '35%'      , '50%'     , '80px'    ,   '5'      ,   '7'      , '140'      ,  '65'       , '3a - George' ], 
['4'   , '10'   , '04'    , '04'    , '76%'   , '220px'   , '63%'      , '63%'      , '50%'     , '80px'    ,   '5'      ,   '7'      , '180'      ,  '70'       , '4 - Hard Rock' ], 
['5'   , '11'   , '05'    , '05'    , '38%'   , '118px'   , '31%'      , '33%'      , '50%'     , '80px'    ,   '5'      ,   '7'      , '162'      , '250'       , '5 - Rocky'   ], /* 5v 6v Rocky */
['6'   , '13'   , '07a'   , '07a'   , '89%'   , '175px'   , '77.2%'    , '64.6%'    , '50%'     , '80px'    , '200'      ,   '7'      , '180'      , '120'       , '7a - Bell'   ], 

['7'   , '15'   , '08a'   , '08a'   , '66%'   , '130px'   , '65%'      , '58%'      , '50%'     , '80px'    , '200'      ,   '7'      , '200'      , '400'       , '8a - Market' ],  /*GOOD  hard rock very close down left */

['8'   , '13'   , '07a'   , '07b'   , '89%'   , '175px'   , '77.2%'    , '64.6%'    , '50%'     , '80px'    , '200'      ,   '7'      ,  '80'      , '120'       , '7b - Bell'   ] 

];

const mapVideoOrder = [
['Key', 'KeyNext' , 'KeyButt' , 'On#' , 'OnTitle'       ,'NextVid', 'NextImg'  , 'NextTitle'     ],

['1'  , '2'       , '1'       , '1a'  , 'Love'          , '01b'    , '01'     , '1b - Love'      ],
['2'  , '3'       , '1'       , '1b'  , 'Love'          , '01c'    , '01'     , '1c - Love'      ],
['3'  , '4'       , '1'       , '1c'  , 'Love'          , '02a'    , '02'     , '2a - Museum'    ],

['4'  , '5'       , '2'       , '2a'  , 'Museum'        , '02b'    , '02'     , '2b - Museum'    ],
['5'  , '6'       , '2'       , '2b'  , 'Museum'        , '02c'    , '02'     , '2c - Museum'    ],
['6'  , '7'       , '2'       , '2c'  , 'Museum'        , '03a'    , '03'     , '3a - George'    ],

['7'  , '8'       , '3'       , '3a'  , 'George'        , '03b'    , '03'     , '3b - George'    ],
['8'  , '9'       , '3'       , '3b'  , 'George'        , '03c'    , '03'     , '3c - George'    ],
['9'  , '10'      , '3'       , '3c'  , 'George'        , '04'     , '04'     , '4 - Hard Rock'  ],

['10' , '11'      , '5'       , '4'   , 'Hard Rock'     , '05'     , '05'     , '5 - Rocky'      ],

['11' , '12'      , '5'       , '5'   , 'Rocky'         , '06'     , '05'     , '6 - Rocky'      ], /* image ck */
['12' , '13'      , '5'       , '5'   , 'Rocky'         , '07a'    , '05'     , '7a - Bell'      ],
   
['13' , '14'      , '6'       , '7a'  , 'Bell'          , '07b'    , '07b'    , '7b - Bell'      ],
['14' , '15'      , '8'       , '7b'  , 'Bell'          , '08a'    , '08a'    , '8a - Market'    ],

['15' , '16'      , '7'       , '8a'  , 'Market'        , '08b'    , '08b'    , '8b - Market'    ],
['16' , '1'       , '1'       , '8b'  , 'Market'        , '01a'    , '01'     , '1a - Love'      ]

]; 
