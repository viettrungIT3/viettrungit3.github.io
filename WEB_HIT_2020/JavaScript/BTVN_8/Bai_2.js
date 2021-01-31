// // output:
// [
//     '5 điều Bác Hồ dạy',
//     '1. Yêu tổ quốc, yêu đồng bào',    
//     '2. Học tập tốt, lao động tốt',    
//     '3. Đoàn kết tốt, kỷ luật tốt',    
//     '4. Giữ gìn vệ sinh thật tốt',     
//     '5. Khiêm tốt, thật thà, dũng cảm',
//     'Ơ mây dình, gút chóp em',
//     'Level 2',
//     'Level 3',
//     'Level 4',
//     'Level 3.1',
//     'Anh rất chào em'
// ]

const comments = [
    {
        body: "5 điều Bác Hồ dạy",
        child: [
            {
                body: "1. Yêu tổ quốc, yêu đồng bào",
                child: []
            },
            {
                body: "2. Học tập tốt, lao động tốt",
                child: []
            },
            {
                body: "3. Đoàn kết tốt, kỷ luật tốt",
                child: []
            },
            {
                body: "4. Giữ gìn vệ sinh thật tốt",
                child: []
            },
            {
                body: "5. Khiêm tốt, thật thà, dũng cảm",
                child: []
            }
        ]
    },
    {
        body: "Ơ mây dình, gút chóp em",
        child: [
            {
                body: "Level 2",
                child: [
                    {
                        body: "Level 3",
                        child: [
                            {
                                body: "Level 4",
                                child: []
                            },
                        ]
                    },
                    {
                        body: "Level 3.1",
                        child: []
                    }
                ]
            }
        ]
    },
    {
        body: "Anh rất chào em",
        child: []
    }
]

function flattenComments(comments) {
    const flattenedComments = comments.reduce((accumulator, currentVal) => {
        accumulator.push(currentVal.body);
        if (currentVal.child.length > 0)
            accumulator = accumulator.concat(flattenComments(currentVal.child));
        return accumulator;
        // gợi ý: triển khai đệ quy flattenComments trong callback này
    }, []);

    return flattenedComments;
}

const flattenedComments = flattenComments(comments);
console.log(flattenedComments);