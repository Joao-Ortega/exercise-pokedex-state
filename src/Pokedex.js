import React from 'react';
import Pokemon from './Pokemon';
import pokemons from './data';

class Pokedex extends React.Component {
    constructor() {
        super()
        this.state = {
            counter: 0,
        }
        this.backPk = this.backPk.bind(this)
        this.nextPk = this.nextPk.bind(this)
    }

    backPk() {
        this.setState((stateBefore, _props) => {
            return (stateBefore.counter === 0) ? { counter: pokemons.length - 1 } : { counter: stateBefore.counter - 1 }
        })
    }

    nextPk() {
        this.setState((stateBefore, _props) => {
            return (stateBefore.counter < pokemons.length - 1) ? { counter: stateBefore.counter + 1 } : { counter: 0 }
        })
    }

    typePoke() {
        // Teste
    }

    render() {
        return (
            <div>
                <div className="pokedex">
                    <Pokemon pokemon={this.props.pokemons.find(pokemon => pokemon.name === pokemons[this.state.counter].name)} />
                </div>
                <button onClick={this.backPk}>Back Pokemon</button>
                <button onClick={this.nextPk}>Next Pokemon</button>
                <button onClick={this.typePoke}>All</button>
                <button onClick={this.typePoke}>Electric</button>
                <button onClick={this.typePoke}>Fire</button>
                <button onClick={this.typePoke}>Bug</button>
                <button onClick={this.typePoke}>Poison</button>
                <button onClick={this.typePoke}>Psychic</button>
            </div>
        );
    }
}
{/* <Pokemon key={pokemon.id} pokemon={pokemon} />) */ }
export default Pokedex;