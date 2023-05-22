export const dataApi = {
    "stats_clients": [
        {
            "id": 1,
            "name": "Merry Johnson",
            "amount": 11501,
            "earnings": 575
        },
        {
            "id": 2,
            "name": "Serenity Fisher",
            "amount": 45200,
            "earnings": 2260
        },
        {
            "id": 3,
            "name": "Audrey Simmmons",
            "amount": 189500,
            "earnings": 9475
        },
        {
            "id": 4,
            "name": "Pat Alexander",
            "amount": 5000,
            "earnings": 250
        },
        {
            "id": 6,
            "name": "Guy Mccoy",
            "amount": 203500,
            "earnings": 10175
        },
        {
            "id": 7,
            "name": "Dianne Russell",
            "amount": 34500,
            "earnings": 1725
        }
    ],
    "stats_partners": [
        {
            "id": 1,
            "name": "Merry Johnson",
            "clients": 10,
            "amount": 124600,
            "earnings": 6230,
            "clients_network": 2,
            "earnings_network": 140
        },
        {
            "id": 2,
            "name": "Alfonso Stanton",
            "clients": 1,
            "amount": 24500,
            "earnings": 1125,
            "clients_network": 23,
            "earnings_network": 7640
        },
        {
            "id": 3,
            "name": "Cristofer Vetrovs",
            "clients": 14,
            "amount": 169000,
            "earnings": 8450,
            "clients_network": 0,
            "earnings_network": 0
        }
    ]
}

export const getData = {
    contacts: [
        {
            'id': 1,
            'name': 'Imran Khan',
            'detail': {
                'direct_sales': 0,
                'via_partners': 1600,
                'via_subpartners': 400,
            }
        },
        {
            'id': 2,
            'name': 'Audrey Simmons',
            'detail': {
                'direct_sales': 2575,
                'via_partners': 1500,
                'via_subpartners': 300,
            }
        },
        {
            'id': 3,
            'name': 'حسن النّيّر',
            'detail': {
                'direct_sales': 6575,
                'via_partners': 0,
                'via_subpartners': 0,
            }
        },
        {
            'id': 4,
            'name': 'Marina',
            'detail': {
                'direct_sales': 0,
                'via_partners': 0,
                'via_subpartners': 500,
            }
        },
        {
            'id': 5,
            'name': 'Jonas Kuegelhoff',
            'detail': {
                'direct_sales': 0,
                'via_partners': 552,
                'via_subpartners': 0,
            }
        },
    ],
    events: [
        {
            'id': 1,
            'name': 'Marina',
            'event_type': 'referral',
            'event': 'new lead',
            'detail': {
                'Sale_type': 'Subpartner',
                'Reference_code': '317-624',
            },
        },
        {
            'id': 2,
            'name': 'Jonas Kuegelhoff',
            'event_type': 'closed_won',
            'event': 'you get 450 AED',
            'detail': {
                'Sale_type': 'Subpartner',
                'Deal_amount': 6000,
                'Your_commission': 15,
                'Reference_code': '317-378',
            },
        },
        {
            'id': 3,
            'name': 'Audrey Simmons',
            'event_type': 'closed_lost',
            'event': 'declined',
            'detail': {
                'Sale_type': 'Partner',
                'Reference_code': '317-331',
            },
        },
        {
            'id': 4,
            'name': 'Jonas Kuegelhoff',
            'event_type': 'waitkeys',
            'event': 'paid in full',
            'detail': {
                'Sale_type': 'Partner',
                'Deal_amount': 19129,
                'Your_commission': 192,
                'Reference_code': '317-523',
            },
        },
        {
            'id': 5,
            'name': 'Audrey Simmons',
            'event_type': 'willmeet',
            'event': 'ready to meet',
            'detail': {
                'Sale_type': 'Client',
                'Reference_code': '317-633',
            },
        },
        {
            'id': 6,
            'name': 'Imran Khan',
            'event_type': 'referral',
            'event': 'new lead',
            'detail': {
                'Sale_type': 'Subpartner',
                'Deal_amount': 6000,
                'Your_commission': 15,
                'Reference_code': '317-929',
            },
        },
        {
            'id': 7,
            'name': 'حسن النّيّر',
            'event_type': 'closed_won',
            'event': 'you get 329 AED',
            'detail': {
                'Sale_type': 'Client',
                'Deal_amount': 6575,
                'Your_commission': 329,
                'Reference_code': '317-335',
            },
        },
        {
            'id': 8,
            'name': 'Imran Khan',
            'event_type': 'closed_won',
            'event': 'you get 89 AED',
            'detail': {
                'Sale_type': 'Partner',
                'Deal_amount': 8920,
                'Your_commission': 89,
                'Reference_code': '317-339',
            },
        },
        {
            'id': 9,
            'name': 'Audrey Simmons',
            'event_type': 'sentofferr',
            'event': 'offer sent',
            'detail': {
                'Sale_type': 'Subpartner',
                'Reference_code': '317-524',
            },
        },

    ]
}

// export const contacts = [
//     {
//         'id': 1,
//         'name': 'Imran Khan',
//         'detail': {
//             'direct_sales': 0,
//             'via_partners': 1600,
//             'via_subpartners': 400,
//         }
//     },
//     {
//         'id': 2,
//         'name': 'Audrey Simmons',
//         'detail': {
//             'direct_sales': 2575,
//             'via_partners': 1500,
//             'via_subpartners': 300,
//         }
//     },
//     {
//         'id': 3,
//         'name': 'حسن النّيّر',
//         'detail': {
//             'direct_sales': 6575,
//             'via_partners': 0,
//             'via_subpartners': 0,
//         }
//     },
//     {
//         'id': 4,
//         'name': 'Marina',
//         'detail': {
//             'direct_sales': 0,
//             'via_partners': 0,
//             'via_subpartners': 500,
//         }
//     },
//     {
//         'id': 5,
//         'name': 'Jonas Kuegelhoff',
//         'detail': {
//             'direct_sales': 0,
//             'via_partners': 552,
//             'via_subpartners': 0,
//         }
//     },
// ]

// export const events = [
//     {
//         'id': 1,
//         'name': 'Marina',
//         'event_type': 'referral',
//         'event': 'new lead',
//         'detail': {
//             'Sale_type': 'Subpartner',
//             'Reference_code': '317-624',
//         },
//     },
//     {
//         'id': 2,
//         'name': 'Jonas Kuegelhoff',
//         'event_type': 'closed_won',
//         'event': 'you get 450 AED',
//         'detail': {
//             'Sale_type': 'Subpartner',
//             'Deal_amount': 6000,
//             'Your_commission': 15,
//             'Reference_code': '317-378',
//         },
//     },
//     {
//         'id': 3,
//         'name': 'Audrey Simmons',
//         'event_type': 'closed_lost',
//         'event': 'declined',
//         'detail': {
//             'Sale_type': 'Partner',
//             'Reference_code': '317-331',
//         },
//     },
//     {
//         'id': 4,
//         'name': 'Jonas Kuegelhoff',
//         'event_type': 'waitkeys',
//         'event': 'paid in full',
//         'detail': {
//             'Sale_type': 'Partner',
//             'Deal_amount': 19129,
//             'Your_commission': 192,
//             'Reference_code': '317-523',
//         },
//     },
//     {
//         'id': 5,
//         'name': 'Audrey Simmons',
//         'event_type': 'willmeet',
//         'event': 'ready to meet',
//         'detail': {
//             'Sale_type': 'Client',
//             'Reference_code': '317-633',
//         },
//     },
//     {
//         'id': 6,
//         'name': 'Imran Khan',
//         'event_type': 'referral',
//         'event': 'new lead',
//         'detail': {
//             'Sale_type': 'Subpartner',
//             'Deal_amount': 6000,
//             'Your_commission': 15,
//             'Reference_code': '317-929',
//         },
//     },
//     {
//         'id': 7,
//         'name': 'حسن النّيّر',
//         'event_type': 'closed_won',
//         'event': 'you get 329 AED',
//         'detail': {
//             'Sale_type': 'Client',
//             'Deal_amount': 6575,
//             'Your_commission': 329,
//             'Reference_code': '317-335',
//         },
//     },
//     {
//         'id': 8,
//         'name': 'Imran Khan',
//         'event_type': 'closed_won',
//         'event': 'you get 89 AED',
//         'detail': {
//             'Sale_type': 'Partner',
//             'Deal_amount': 8920,
//             'Your_commission': 89,
//             'Reference_code': '317-339',
//         },
//     },
//     {
//         'id': 9,
//         'name': 'Audrey Simmons',
//         'event_type': 'sentofferr',
//         'event': 'offer sent',
//         'detail': {
//             'Sale_type': 'Subpartner',
//             'Reference_code': '317-524',
//         },
//     },

// ]
