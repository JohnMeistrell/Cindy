const mapMediaInfo = [
/*                           LeftRight   UpDown         LeftRight    UpDown                      MAP          MAP     */
['Key' ,'Video#', 'Photo#', 'WhereR', 'WhereCpx', 'WhatMagR%', 'WhatMagC%', 'VidRowLR', 'VidColUP', 'MapRowLR' , 'MapColUD' , 'PicRowLR%', 'PicColUPpx', 'Title'      ],   
['1'   ,'01a'   , '01'    , '56%'   , '130px'   , '55%'      , '58%'      , '300'     , '200'     ,   '5'      ,   '7'      ,  '20'      ,   '1'       , '1a - Love'   ], /*GOOD*/
['2'   ,'02a'   , '02'    , '20%'   ,  '60px'   , '28%'      , '32%'      , '50%'     , '80px'    ,   '5'      ,   '7'      , '130'      , '200'       , '2a - Museum' ], /*GOOD*/

['3'   ,'03a'   , '03'    , '21%'   ,  '57px'   , '30%'      , '35%'      , '50%'     , '80px'    ,   '5'      ,   '7'      , '140'      ,  '65'       , '3a - George' ], /*GOOD*/
['4'   ,'04'    , '04'    , '21%'   ,  '61px'   , '29%'      , '33.5%'    , '50%'     , '80px'    ,   '5'      ,   '7'      , '130'      , '100'       , '4 - Rocky'   ], /*GOOD*/

['5'   ,'05'    , '05'    , '21%'   ,  '61px'   , '29%'      , '33.5%'    , '50%'     , '80px'    ,   '5'      ,   '7'      ,  '80'      , '120'       , '5 - Rocky'   ], /*GOOD*/
['6'   ,'06'    , '06'    , '21%'   ,  '61px'   , '29%'      , '33.5%'    , '50%'     , '80px'    ,   '5'      ,   '7'      , '300'      , '120'       , '6 - Rocky'   ], /*GOOD*/

['7'   ,'07a'   , '07'    , '89%'   , '175px'   , '79%'      , '65%'      , '50%'     , '80px'    , '200'      ,   '7'      , '180'      , '120'       , '7a - Bell'   ], /*GOOD*/
['8'   ,'08a'   , '08'    , '66%'   , '130px'   , '65%'      , '58%'      , '50%'     , '80px'    , '200'      ,   '7'      , '200'      , '400'       , '8a - Market' ]  /*GOOD  hard rock very close down left */
];

const mapVideoOrder = [
['Key', 'KeyNext' , 'KeyButt' , 'On#' , 'OnTitle', 'NextVid', 'NextImg', 'NextTitle'      ],
['1'  , '2'       , '1'       , '1a'  , 'Love'   , '01b'    , '01'     , '1b - Love'      ],
['2'  , '3'       , '1'       , '1b'  , 'Love'   , '01c'    , '01'     , '1c - Love'      ],
['3'  , '4'       , '2'       , '1c'  , 'Love'   , '02a'    , '02'     , '2a - Museum'    ],
['4'  , '5'       , '2'       , '2a'  , 'Museum' , '02b'    , '02'     , '2b - Museum'    ],
['5'  , '6'       , '2'       , '2b'  , 'Museum' , '02c'    , '02'     , '2c - Museum'    ],
['6'  , '7'       , '3'       , '2c'  , 'Museum' , '03a'    , '03'     , '3a - George'    ],
['7'  , '8'       , '3'       , '3a'  , 'George' , '03b'    , '03'     , '3b - George'    ],
['8'  , '9'       , '3'       , '3b'  , 'George' , '03c'    , '03'     , '3c - George'    ],
['9'  , '10'      , '4'       , '3c'  , 'George' , '04'     , '04'     , '4 - Rocky'      ],
['10' , '11'      , '5'       , '4'   , 'Rocky'  , '05'     , '05'     , '5 - Rocky'      ],
['11' , '12'      , '6'       , '5'   , 'Rocky'  , '06'     , '06'     , '6 - Rocky'      ],
['12' , '13'      , '7'       , '6'   , 'Rocky'  , '07a'    , '07'     , '7a - Bell'      ],
['13' , '14'      , '7'       , '7a'  , 'Bell'   , '07b'    , '07'     , '7b - Bell'      ],
['14' , '15'      , '8'       , '7b'  , 'Bell'   , '08a'    , '08'     , '8a - Market'    ],
['15' , '16'      , '8'       , '8a'  , 'Market' , '08b'    , '08'     , '8b - Market'    ],
['16' , '1'       , '1'       , '8b'  , 'Market' , '01a'    , '01'     , '1a - Love'      ]
];






