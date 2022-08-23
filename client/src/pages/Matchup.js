import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_MATCHUPS } from '../utils/queries';
import { CREATE_MATCHUP } from '../utils/mutations';

const Matchup = () => {
  // Unsure if need but needed to path routes
  const { loading, data } = useQuery(QUERY_MATCHUPS);
  const [createMatchup, { error }] = useMutation(CREATE_MATCHUP);

  const [formList, setFormList] = useState([]);
  const [formData, setFormData] = useState({
    form1: 'Javascript',
    form2: 'Javascript',
  });
  let navigate = useNavigate();

  useEffect(() => {
    const getFormList = async () => {
      try {
        const res = await getAllForm();
        if (!res.ok) {
          throw new Error('No resumes posted')
        }
        const formList = await res.json();
        setFormList(techList);
      } catch (err) {
        console.error(err);
      }
      };
      getFormList();
    }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await CREATE_MATCHUP(formData);
      if (!res.ok) {
        throw new Error('something went wrong!');
      }

      const matchup = await res.json();
      console.log(matchup);
      navigate('/matchup/${matchup._id}');
    } catch (err) {
      console.error(err);
    }

    setFormData({
      form1: 'JavaScript',
      form2: 'JavaScript',
    });
    };

    return (
      <div className="card bg-white card-rounded w-25">
      <div className="card-header bg-dark text-center">
        <h1>Let's create a matchup!</h1>
      </div>
      <div className="card-body m-5">
        <form onSubmit={handleFormSubmit}>
          <label>Form 1: </label>
          <select name="form1" onChange={handleInputChange}>
            {formList.map((form) => {
              return (
                <option key={form._id} value={form.name}>
                  {form.name}
                </option>
              );
            })}
          </select>
          <label>Tech 2: </label>
          <select name="form2" onChange={handleInputChange}>
            {formList.map((form) => {
              return (
                <option key={form._id} value={form.name}>
                  {form.name}
                </option>
              );
            })}
          </select>
          <button className="btn btn-danger" type="submit">
            Create Matchup!
          </button>
        </form>
      </div>
    </div>
  );
};

export default Matchup;
