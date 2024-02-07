import {Button, Card, Collapse} from "react-bootstrap";
import {useState} from "react";
function CollapsibleContent({ title }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="text-center w-100 px-5">
                <Button
                    className="py-2 w-100 mt-1"
                    onClick={() => setOpen(!open)}
                    aria-controls={`collapse-${title}`}
                    aria-expanded={open}
                    style={{backgroundColor:"#013571"}}
                >
                    Toggle {title}
                </Button>

            <Collapse in={open}>
                <div id={`collapse-${title}`}>
                    <Card>
                        <Card.Body>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad blanditiis commodi cupiditate dignissimos expedita in laborum laudantium maiores minus modi molestiae perspiciatis porro quaerat quis, soluta sunt unde veniam voluptate.
                        </Card.Body>
                    </Card>
                </div>
            </Collapse>
        </div>
    );
}

export default  function DsAssign () {
    const [open, setOpen] = useState(false);
    const titles = [

        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, reprehenderit.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, reprehenderit.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, reprehenderit.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, reprehenderit.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, reprehenderit.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, reprehenderit.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, reprehenderit.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, reprehenderit.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, reprehenderit.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, reprehenderit.',
    ];

    return ( <div className="w-100">
        {titles.map((title, index) => (
            <CollapsibleContent key={index} title={title}/>
            
        ))}
    </div>
    );

}