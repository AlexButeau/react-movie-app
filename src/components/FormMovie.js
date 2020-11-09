import React from 'react';
import axios from 'axios';

class FormMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      poster: '',
      comment: '',
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitForm = (e) => {
    e.preventDefault();
    const url = 'https://post-a-form.herokuapp.com/api/movies/';
    axios
      .post(url, this.state)
      .then((res) => res.data)
      .then((res) => {
        alert(`Film ajouté avec l'ID ${res.id} !`);
      })
      .catch((e) => {
        console.error(e);
        alert(`Erreur lors de l'ajout d'un film : ${e.message}`);
      });
  };

  render() {
    return (
      <div className='FormMovie'>
        <h1>Saisie d'un film</h1>

        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Informations</legend>
            <div className='form-data'>
              <label htmlFor='title'>Titre</label>
              <input
                type='text'
                id='title'
                name='title'
                onChange={this.onChange}
                value={this.state.title}
                required
              />
            </div>

            <div className='form-data'>
              <label htmlFor='poster'>Url du poster</label>
              <input
                type='text'
                id='poster'
                name='poster'
                onChange={this.onChange}
                value={this.state.poster}
                required
              />
            </div>

            <div className='form-data'>
              <label htmlFor='comment'>Message</label>
              <textarea
                id='comment'
                name='comment'
                onChange={this.onChange}
                value={this.state.comment}
                required
              >
                {' '}
              </textarea>
            </div>
            <hr />
            <div className='form-data'>
              <input type='submit' value='Envoyer' />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default FormMovie;
