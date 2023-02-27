const TODO_LIST =[
    {
        "user":1,
        "id":1,
        "title":"hdgghcn y uci ",
        "completed":false
    },
    {
        "user":1,
        "id":2,
        "title":"hdgghcn y uci ",
        "completed":false
    },
    {
        "user":1,
        "id":3,
        "title":"hdgghcn y uci ",
        "completed":false
    },
    {
        "user":1,
        "id":4,
        "title":"hdgghcn y uci ",
        "completed":false
    },
    {
        "user":1,
        "id":5,
        "title":"hdgghcn y uci ",
        "completed":false
    },
] ;
export const togettodolist =()=>{
    return TODO_LIST.filter((each_item) => each_item.
    completed===false);
}
console.log(togettodolist());
//export   togettodolist;