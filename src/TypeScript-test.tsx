
import React, {useState} from 'react';
import { type Color } from './lib'

    //let FullName: string = "Filip";

    //let scores:number[] = [1, 2, 3];

    /*function multiplier(index: number):number {
        return index * 2;
    }*/
/*
    interface Car {
        brand: string;
        year: number;
        electric? : boolean;
    }
    let myCar:Car = {brand: "Tesla", year: (2023)};

    function printCar(brand:string, year:number, electric?:boolean) {
        console.log(myCar);
    }


    type ID = string | number;

    function formatID(id: string | number){
        console.log(`ID: ${id}`)
    }

    function wrapInArray<T>(value:T):T[] {
        return [value];
    }

    type Direction = {"up" | "down" | "left" | "right" }
        

    function move(dir: Direction){
        console.log("Moving up...");
    }

    type User = {
        id: number;
        name: string;
        isAdmin: boolean;
    }

    let user1:User;

    function createUser(id: number, name: string): User {
        return User = {
            id: number;
            name: string;
            isAdmin?: false;
        }
    }
*/


    //  !!!   TypeScript course   !!!  //


    //type ButtonProps = React.ComponentProps<"button"> & {
    //    variant?: "primary" | "secondary";
    //};

    type ButtonProps = {
        type: "button" | "submit" | "reset";
        color: "red" | "blue" | "green";
    };

    type SuperButtonProps = ButtonProps & {
        size: "md" | "lg";
    }

    const handleClick = (event:
        React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => console.log("Clicked");


    type User = {
        name: string;
        age: number;
    }

    export default function Button<T>({ type, autoFocus, variant, ...rest }: ButtonProps<T>) {

        // useState( ) hook in TS
    const [count, setCount] = useState(0);
    const [text, setText] = useState("Click me");
    const [isPrimary, setIsPrimary] = useState(true);
    const [user, setUser] = useState<User | null>(null);
    
    const name = user?.name;

        // useRef( ) hook in TS
    
        const ref = useRef<HTMLButtonElement>(null);


    const buttonTextOptions = [
        "Click me",
        "Click me again",
        "Click me one more time",
    ] as const;


    type User = {
        sessionId: string;
        name: string;
    };

    type Guest = Omit<User, "name">;



    type ButtonColor = "red" | "blue" | "green";

    useEffect(() => {
        const previousButtonColor = localStorage.getItem("buttonColor") as ButtonColor;
    }, []);




    const convertToArray = <T,>(value: T): T[] => {
        return [value];
    };

    function convertToArray<T>(value: T): T[] {
        return [value];
    }

    convertToArray(5);
    convertToArray("Hello");


    type ButtonProps = {
        countValue: T;
        countHistory: T[];
    };
    

    type Color = "red" | "blue" | "green";
    

    useEffect(() => {
        fetch("https")
            .then((response) => response.json())
            .then((data: unknown) => console.log(data));
                // check through zod
    }, []);


    type ButtonProps = {
        children: React.ReactNode;
        style: React.CSSProperties;
    };

    return (
        <button ref={ref} onClick={handleClick} type={type} autoFocus={autoFocus} {...rest}>
            {buttonTextOptions.map(option => {
                return option;
            })}
        </button>);
}
