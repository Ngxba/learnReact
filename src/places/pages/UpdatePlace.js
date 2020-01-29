import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PlaceForm.css";

import Input from "../../shared/components/FormElements/Input/Input";
import Button from "../../shared/components/FormElements/Button/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Thap rua",
    description: "cuc ki dep cuc ki ngau, cuc ki tuyet voi luon",
    address: "hanoi dep lam em oi",
    imageUrl:
      "http://laodongthudo.vn/stores/news_dataimages/quocdai/092017/19/09/0038_Du-lich-ho-guom-ha-noi-mytour-7.jpg",
    location: {
      lat: 21.0278421,
      lng: 105.8500904
    },
    creator: "u1"
  },
  {
    id: "p2",
    title: "Thap rua",
    description: "cuc ki dep cuc ki ngau, cuc ki tuyet voi luon",
    address: "hanoi dep lam em oi",
    imageUrl:
      "http://laodongthudo.vn/stores/news_dataimages/quocdai/092017/19/09/0038_Du-lich-ho-guom-ha-noi-mytour-7.jpg",
    location: {
      lat: 21.0278421,
      lng: 105.8500904
    },
    creator: "u2"
  }
];

const UpdatePlace = () => {
  const placeId = useParams().placeId;
  const [isLoading, setIsLoading] = useState(true)

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false
      },
      description: {
        value: "",
        isValid: false
      }
    },
    false
  );

  const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

  useEffect(() => {
    setFormData(
      {
        title: {
          value: identifiedPlace.title,
          isValid: true
        },
        description: {
          value: identifiedPlace.description,
          isValid: true
        }
      },
      true
    );
    setIsLoading(false);
  }, [setFormData, identifiedPlace]);

  const placeUpdateSubmitHandler = event => {
    event.preventDefault();
    console.log(formState);
  };

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading ...</h2>
      </div>
    );
  }
  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="please enter a valid title"
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialIsValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="please enter a valid title. at least 5 char"
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialIsValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
