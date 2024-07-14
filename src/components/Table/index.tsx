// Shadcn Component
import { Table as ShadcnTable, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

export default function Table({ headers, content }: any) {
  return (
    <ShadcnTable className="relative">
      <TableHeader className="left-0 sticky top-0">
        <TableRow>
          {headers.map(
            (header: any): JSX.Element => (
              <TableHead className={header.className} key={header.key}>
                {header.label}
              </TableHead>
            )
          )}
        </TableRow>
      </TableHeader>
      <TableBody>
        {content.map(
          (elem: any): JSX.Element => (
            <TableRow key={elem.key}>
              {headers.map(
                (header: any): JSX.Element => (
                  <TableCell key={header.key}>{elem[header.key]}</TableCell>
                )
              )}
            </TableRow>
          )
        )}
      </TableBody>
    </ShadcnTable>
  );
}
