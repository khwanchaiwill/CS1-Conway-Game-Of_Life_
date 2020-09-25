import React from 'react';

function GameRule(){
    return(
        <div className="rule">
            <h1>John Conway's Game of Life</h1>
                Below is a java version of John Conway's Game of Life.  It is fairly simple to use.  You can select some default starting points by using the combination box on the left of the bottom control panel.  You can also add cells directly by clicking on the grid.  If you click and drag, you add cells.  If you simply click on the grid you will change the cell - a blank cell will be filled and a filled cell will be empty.  Pressing the start button will start the program. Pressing stop will stop the program and allow you to enter new cells or figures.  The clear button starts the process over.
                <h2>The Rules:</h2>
                <h5>Below are the rules to life:</h5>

                <h3>For a space that is 'populated':</h3>
                <p className='rule-info'>
                    Each cell with one or no neighbors dies, as if by loneliness.
                    Each cell with four or more neighbors dies, as if by overpopulation.
                    Each cell with two or three neighbors survives.
                </p>
                <h3>For a space that is 'empty' or 'unpopulated'</h3>
                <p className='rule-info'>
                    Each cell with three neighbors becomes populated.
                    In this version, the space is finite but unbounded - that is, in counting neighbors I wrap the grid around at the edges.
                    The set of presets is quite limited at this time.  If you send me others I will gladly add them to this list.
                    No Java 2 SDK, Standard Edition v 1.3 support for APPLET!!
                </p>         
        </div>
    )
};
export default GameRule;