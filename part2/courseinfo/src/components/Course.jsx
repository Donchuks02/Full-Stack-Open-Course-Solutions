const Course = ({courses}) => {

    
    
    const firstCourse = courses[0]
    const secondCourse = courses[1]


    const firstCourseTotal = firstCourse.parts.reduce((sum, part) => sum + part.exercises, 0)

    const secondCourseTotal = secondCourse.parts.reduce((sum, part) => sum + part.exercises, 0)

    
    return (
      <div>
        <h2>{firstCourse.name}</h2>
          {firstCourse.parts.map(part => (
            <p key={part.id}>{part.name} {part.exercises}</p>
          ))}        
        <b>total of {firstCourseTotal} exercises</b>



        <h2>{secondCourse.name}</h2>
          {secondCourse.parts.map(part => (
            <p key={part.id}>{part.name} {part.exercises}</p>
          ))}        
        <b>total of {secondCourseTotal} exercises</b>
      </div>
    )
  }




  export default Course

