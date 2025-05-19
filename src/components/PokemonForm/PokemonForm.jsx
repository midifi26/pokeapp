import React, {useEffect, useState}from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { PokemonContext } from "../../context/PokemonContext";
import "./PokemonForm.css";

// const pokemonTypes = [
//   "normal", "fire", "water", "electric", "grass", "ice", "fighting", "poison",
//   "ground", "flying", "psychic", "bug", "rock", "ghost", "dragon", "dark",
//   "steel", "fairy"
// ];


const PokemonForm = () => {
  const {addPokemon} = useContext(PokemonContext);
  const navigate = useNavigate();

  const {register, handleSubmit, formState: {errors}} = useForm();

  const onSubmit = (data) => {
    data.id= parseInt(data.id);
    addPokemon(data);
    navigate('/');
  }

    return (
    <div className="form-container">
      <h2>Nuevo Pokémon</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

        {/* ID */}
        <label>ID:</label>
        <input
          type="number"
          {...register('id', { required: 'El ID es obligatorio' })}
        />
        {errors.id && <span className="error">{errors.id.message}</span>}

        {/* Name */}
        <label>Nombre:</label>
        <input
          type="text"
          {...register('name', {
            required: 'El nombre es obligatorio',
            minLength: {
              value: 3,
              message: 'Debe tener al menos 3 caracteres'
            }
          })}
        />
        {errors.name && <span className="error">{errors.name.message}</span>}

        {/* Imagen */}
        <label>URL de Imagen:</label>
        <input
          type="text"
          {...register('image', { required: 'La imagen es obligatoria' })}
        />
        {errors.image && <span className="error">{errors.image.message}</span>}

        {/* Tipo 1 */}
        <label>Tipo 1:</label>
        <select {...register('typeOne', { required: 'El tipo es obligatorio' })}>
          <option value="">Seleccione un tipo</option>
          <option value="fire">Fire</option>
          <option value="water">Water</option>
          <option value="grass">Grass</option>
          <option value="electric">Electric</option>
          <option value="rock">Rock</option>
          <option value="ghost">Ghost</option>
          <option value="normal">Normal</option>
          <option value="fighting">Fighting</option>
          <option value="poison">Poison</option>
          <option value="ground">Ground</option>
          <option value="flying">Flying</option>
          <option value="psychic">Psychic</option>
          <option value="bug">Bug</option>
          <option value="dark">Dark</option>
          <option value="steel">Steel</option>
          <option value="fairy">Fairy</option>
          <option value="ice">Ice</option>
        </select>
        {errors.typeOne && <span className="error">{errors.typeOne.message}</span>}

        {/* Tipo 2 */}
        <label>Tipo 2:</label>
        <select {...register('typeTwo')}>
          <option value="">Seleccione un tipo</option>
          <option value="fire">Fire</option>
          <option value="water">Water</option>
          <option value="grass">Grass</option>
          <option value="electric">Electric</option>
          <option value="rock">Rock</option>
          <option value="ghost">Ghost</option>
          <option value="normal">Normal</option>
          <option value="fighting">Fighting</option>
          <option value="poison">Poison</option>
          <option value="ground">Ground</option>
          <option value="flying">Flying</option>
          <option value="psychic">Psychic</option>
          <option value="bug">Bug</option>
          <option value="dark">Dark</option>
          <option value="steel">Steel</option>
          <option value="fairy">Fairy</option>
          <option value="ice">Ice</option>
        </select>
        {errors.typeTwo && <span className="error">{errors.typeTwo.message}</span>}

        <button type="submit">Crear Pokémon</button>
      </form>
    </div>
  );
};

export default PokemonForm;
