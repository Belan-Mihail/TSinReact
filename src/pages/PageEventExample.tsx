import React from 'react'
import '../App.css'

const PageEventExample = () => {

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
    }

    return (
        <div className="eventExample">
          <form>
            <input
              type="text"
              placeholder="Search for anything..."
              
            />
            <button onClick={handleClick}>Search</button>
          </form>
          <form className="post">
            <h1>Lorem ipsum dolor sit amet consectetur 1</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam
              voluptate quisquam voluptatibus magni voluptatum quasi eveniet totam
              harum neque itaque, eum reprehenderit non repellendus? Assumenda
              necessitatibus distinctio veniam eveniet.
            </p>
            <button>Delete</button>
          </form>
          <form className="post">
            <h1>Lorem ipsum dolor sit amet consectetur 2</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam
              voluptate quisquam voluptatibus magni voluptatum quasi eveniet totam
              harum neque itaque, eum reprehenderit non repellendus? Assumenda
              necessitatibus distinctio veniam eveniet.
            </p>
            <button>Delete</button>
          </form>
        </div>
      );
}

export default PageEventExample