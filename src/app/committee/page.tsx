import { roles } from '@/lib/committee-types'
import Link from 'next/link';
export default function Committee(){
    return (
        <div>
            <div>
                {Object.entries(roles).map(([key, value]) => (
                    <Link key={key} href={`/committee/${key}`} className="block hover:underline">
                        {value}
                    </Link>
                ))}
            </div>
        </div>
    )
}
