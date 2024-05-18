export default function Footer({name,email,address,mobile,vehcileName,vehicleRegistrationNumber})
{
    return(
        <>
                <footer className="pt-7 border-t-2 mr-5">
                    <ul className="flex flex-wrap items-center justify-center space-x-8 space-y-1">
                        <li className="space-x-2"><span className="font-bold">Your name:</span>{name}</li>
                        <li className="space-x-2"><span className="font-bold">Your address:</span>{address}</li>
                        <li><span className="font-bold">Your email:</span>{email}</li>
                        <li><span className="font-bold">Mobile number:</span>{mobile}</li>
                        <li><span className="font-bold">Vehicle name:</span>{vehcileName}</li>
                        <li><span className="font-bold">Vehicle registration number:</span>{vehicleRegistrationNumber}</li>
                    </ul>
                </footer>
        </>
    )
}