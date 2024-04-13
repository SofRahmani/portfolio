import { LucideIcon } from 'lucide-react'
import Link from 'next/link';
import { Badge } from '../../ui/badge'


export interface badgeLinkProps {
  Icon: LucideIcon;
  url: string;
  name: string;
}

export default function BadgeLink({ Icon, url, name }: badgeLinkProps) {
  return (
    <Link href={url} target='_blank' >
      <Badge>
        <Icon size="20" className='mr-2' />
        <span>{name}</span>
      </Badge>
    </Link>
  );
}