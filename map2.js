const student = [
    {id : 21, name: 'dipu'},
    {id : 31, name: 'tipu'},
    {id : 41, name: 'jipu'},
    {id : 51, name: 'lipu'}
];
output = [];
for(let i = 0; i < student.length; i++)
{
    const studentTag = student[i];
    const studentName = studentTag.name;
    output.push(studentName);
}
console.log(output);

const ids = student.map(s => s.id);
console.log(ids);

const bigger = student.filter(s => s.id>30);
console.log(bigger);

const biggerFind = student.find(s => s.id>30);
console.log(biggerFind);
