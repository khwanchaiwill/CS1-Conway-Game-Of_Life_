import React from 'react';


function AboutPage () {
    return(
        <div className="about-page">
            <h1>Cellular Automata and Conway's "Game of Life"</h1>
            <div className='about-info'>
            <p>In late 1940, John von Neumann defined life as a creation (as a being or organism) which can reproduce itself and simulate a Turing machine. Von Neumann was thinking about an engineering solution which would use electromagnetic components floating randomly in liquid or gas.[2] This turned out not to be realistic with the technology available at the time. Stanislaw Ulam invented cellular automata, which were intended to simulate von Neumann's theoretical electromagnetic constructions. Ulam discussed using computers to simulate his cellular automata in a two-dimensional lattice in several papers. In parallel, von Neumann attempted to construct Ulam's cellular automaton. Although successful, he was busy with other projects and left some details unfinished. His construction was complicated because it tried to simulate his own engineering design. Over time, simpler life constructions were provided by other researchers, and published in papers and books.[citation needed]

            </p>
            </div>
            <div className='about-info'>
            <p>Motivated by questions in mathematical logic and in part by work on simulation games by Ulam, among others, John Conway began doing experiments in 1968 with a variety of different two-dimensional cellular automaton rules.[3] Conway's initial goal was to define an interesting and unpredictable cell automaton. For example, he wanted some configurations to last for a long time before dying and other configurations to go on forever without allowing cycles. It was a significant challenge and an open problem for years before experts on cellular automata managed to prove that, indeed, the Game of Life admitted of a configuration which was alive in the sense of satisfying Von Neumann's two general requirements. While the definitions before the Game of Life were proof-oriented, Conway's construction aimed at simplicity without a priori providing proof the automaton was alive.</p>
            </div>
            <div className='about-info'>
                <h4>Conway chose his rules carefully, after considerable experimentation, to meet these criteria:</h4>
                <ol>
                    <li>There should be no explosive growth.</li>
                    <li>There should exist small initial patterns with chaotic, unpredictable outcomes.</li>
                    <li>There should be potential for von Neumann universal constructors.</li>
                    <li>The rules should be as simple as possible, whilst adhering to the above constraints.[4]</li>
                </ol>
            </div>
            <div className='about-info'>
                <p>The game made its first public appearance in the October 1970 issue of Scientific American, in Martin Gardner's "Mathematical Games" column. Theoretically, the Game of Life has the power of a universal Turing machine: anything that can be computed algorithmically can be computed within the Game of Life.[5][6][7] Gardner wrote, "Because of Life's analogies with the rise, fall and alterations of a society of living organisms, it belongs to a growing class of what are called 'simulation games' (games that resemble real life processes)."[8]</p>
                
                <p>
                Since its publication, the Game of Life has attracted much interest because of the surprising ways in which the patterns can evolve. It provides an example of emergence and self-organization. Scholars in various fields, such as computer science, physics, biology, biochemistry, economics, mathematics, philosophy, and generative sciences, have made use of the way that complex patterns can emerge from the implementation of the game's simple rules.[citation needed] The game can also serve as a didactic analogy, used to convey the somewhat counter-intuitive notion that design and organization can spontaneously emerge in the absence of a designer. For example, philosopher Daniel Dennett has used the analogy of the Game of Life "universe" extensively to illustrate the possible evolution of complex philosophical constructs, such as consciousness and free will, from the relatively simple set of deterministic physical laws which might govern our universe.[9][10][11]
                </p>
                <p>

                The popularity of the Game of Life was helped by its coming into being at the same time as increasingly inexpensive computer access. The game could be run for hours on these machines, which would otherwise have remained unused at night. In this respect, it foreshadowed the later popularity of computer-generated fractals. For many, the Game of Life was simply a programming challenge: a fun way to use otherwise wasted CPU cycles. For some, however, the Game of Life had more philosophical connotations. It developed a cult following through the 1970s and beyond; current developments have gone so far as to create theoretic emulations of computer systems within the confines of a Game of Life board.[12][13]
                </p>
            </div>
            <div className="still-life"> 
                <h3 className="h3-life">Still lifes</h3>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Game_of_life_block_with_border.svg/99px-Game_of_life_block_with_border.svg.png" />
                
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Game_of_life_beehive.svg/147px-Game_of_life_beehive.svg.png" />
                
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Game_of_life_loaf.svg/147px-Game_of_life_loaf.svg.png" />
                
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Game_of_life_boat.svg/123px-Game_of_life_boat.svg.png" />
                
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Game_of_life_flower.svg/123px-Game_of_life_flower.svg.png" />
                <div className="still-life-name">Block</div>
                <div className="still-life-name">Bee-hive</div>
                <div className="still-life-name">Loaf</div>
                <div className="still-life-name">Boat</div>
                <div className="still-life-name">Tub</div>

            </div>
            <div className="Oscill">
                <h3 className="h3-life">Oscillators</h3>
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Game_of_life_blinker.gif" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/12/Game_of_life_toad.gif" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Game_of_life_beacon.gif" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/07/Game_of_life_pulsar.gif" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fb/I-Column.gif" />
                <div className="still-life-name">Blinker(period 2)</div>
                <div className="still-life-name">Toad(period 2)</div>
                <div className="still-life-name">Beacon(period 2)</div>
                <div className="still-life-name">Pulsar(period 3)</div>
                <div className="still-life-name">Penta-decathlon(period 15)</div>
            </div>
            <div className="Spaceships">
                <h3 className="h3-life">Spaceships</h3>
                <img className="space-img" src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Game_of_life_animated_glider.gif" />
                <img className="space-img" src="https://upload.wikimedia.org/wikipedia/commons/3/37/Game_of_life_animated_LWSS.gif" />
                <img className="space-img" src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Animated_Mwss.gif" />
                <img className="space-img" src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Animated_Hwss.gif" />
                <div className="still-life-name">Glider</div>
                <div className="still-life-name">Light-weightspaceship(LWSS)</div>
                <div className="still-life-name">Middle-weightspaceship(MWSS)</div>
                <div className="still-life-name">Heavy-weightspaceship(HWSS)</div>
 
            </div>
        </div>
    )
}
export default AboutPage;