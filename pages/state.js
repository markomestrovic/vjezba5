import { useState } from 'react';
import Image from 'next/image';
import HeaderFooterLayout from '../layouts/HeaderFooterLayout';

const studentsConstArray = [
    {
        id: 1,
        name: 'Mate',
        lastName: 'Matic',
        imgSrc: '/profile.jpg',
    },
    {
        id: 2,
        name: 'Jure',
        lastName: 'Juric',
        imgSrc: '/profile.jpg',
    },
];

const Student = ({ name, lastName, imgSrc }) => {
    return (
        <li className="flex flex-row relative items-center">
            <section className="mr-5 w-24 mt-5 mb-5 flex-row justify-between flex items-center">
                <p>{name}</p>
                <p>{lastName}</p>
            </section>
            <Image
                className="absolute right-3 top-3"
                layout="fixed"
                width="50px"
                height="50px"
                src={imgSrc}
                alt="profile image"
            />
        </li>
    );
};

const StateDemo = () => {
    const [state, setState] = useState({
        shouldHideList: false,
        students: studentsConstArray,
        nameInputValue: '',
        lastNameInputValue: '',
    });

    const handleToggle = () => {
        setState({
            ...state, // kopiraj sve iz state objekta
            shouldHideList: !state.shouldHideList, // i promijeni samo ono sto je potrebno
        });
    };

    const handleSubmit = () => {
        const newStudent = {
            id: state.students.length + 1,
            name: state.nameInputValue,
            lastName: state.lastNameInputValue,
            imgSrc: '/profile.jpg',
        };

        setState({
            ...state,
            students: [...state.students, newStudent],
            nameInputValue: '',
            lastNameInputValue: '',
        });
    };

    return (
        <HeaderFooterLayout>
            <main className="py-8">
                <h1 className="text-center mt-5 mb-5 font-bold text-4xl underline">
                    Welcome to state demo!
                </h1>
                {state.shouldHideList ? (
                    <p className="w-min mx-auto min-w-max">
                        Sorry studenti spavaju 😴
                    </p>
                ) : (
                    <ul className="flex flex-col items-center justify-around">
                        {state.students.map((el) => (
                            <Student key={el.id} {...el} />
                        ))}
                    </ul>
                )}
                <section className="flex flex-col w-64 justify-center items-center my-0 mx-auto border-gray-500">
                    <input
                        value={state.nameInputValue}
                        onChange={(e) =>
                            setState({ ...state, nameInputValue: e.target.value })
                        }
                        className="border-b-2 outline-none mt-5 border-solid border-gray-500"
                        type="text"
                        placeholder="Name"
                    />
                    <input
                        value={state.lastNameInputValue}
                        onChange={(e) =>
                            setState({
                                ...state,
                                lastNameInputValue: e.target.value,
                            })
                        }
                        className="border-b-2 outline-none mt-5 border-solid border-gray-500"
                        type="text"
                        placeholder="Last name"
                    />
                    <button
                        onClick={handleSubmit}
                        className="my-5 cursor-pointer bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    >
                        Submit
                    </button>
                </section>
                <button
                    onClick={handleToggle}
                    className="block mx-auto cursor-pointer bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
                >
                    Toggle
                </button>
            </main>
        </HeaderFooterLayout>
    );
};

export default StateDemo;
