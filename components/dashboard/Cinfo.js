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

    return ( <div className="w-100 container  " >

            <div className="h2 p-2 text-center text-white"  style={{backgroundColor:"#013571"}}
            >Courses Basic Information </div>
            <br/>
        <div className="w-100  text-center d-flex  justify-content-center ">
            <div className="" style={{width:"90%"}}>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consequatur cupiditate possimus quos vel? Architecto aut corporis deleniti deserunt distinctio dolores, doloribus ea eligendi eos eveniet illo in magnam praesentium, quasi tempora vitae voluptate! A adipisci consectetur ipsum maiores numquam quam, vero voluptatum. A commodi delectus, ea eum ipsam minus nemo omnis rem voluptatem! Aliquam atque blanditiis commodi dicta dignissimos doloribus fugiat harum id iste natus nihil, odit placeat, praesentium quaerat quo ratione repudiandae sapiente tempora temporibus totam vel voluptatibus voluptatum? Animi commodi deserunt iste itaque laborum quod sed soluta? Aspernatur assumenda blanditiis dignissimos doloribus eaque error explicabo fuga harum id, illo magni natus nemo nesciunt non nostrum numquam optio provident sapiente sed sit tempora ullam voluptatum! A aspernatur cupiditate eos excepturi, facere, fuga magnam modi necessitatibus quo, sit vitae voluptatem! A architecto eius eveniet ipsam, quia saepe temporibus unde velit vitae? Non, voluptatem, voluptatum. Architecto, at blanditiis consectetur error et ex minima nesciunt nobis obcaecati, officiis quasi, rem repellendus similique tempora unde ut voluptatem? Alias, commodi doloremque fuga fugit hic porro rem similique. Consectetur dolores ipsa iusto non odio quis similique. Ab amet asperiores ea ex incidunt, inventore iste itaque laboriosam nam, nihil nulla officia perferendis, quae soluta vel!
            </div>
            </div>
            <br/>

            <div className="h2 p-2 text-center text-white"  style={{backgroundColor:"#013571"}}
            >Courses Syllabus </div>

            <br/>
            <div className="w-100  text-center d-flex  justify-content-center mb-5 ">
<div className="" style={{width:"90%"}}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci aliquam aliquid amet animi assumenda at blanditiis consequuntur cum cupiditate distinctio dolorum eaque eveniet explicabo, facilis illo illum ipsum iure maiores natus nostrum nulla placeat possimus praesentium qui quidem quisquam quod reprehenderit rerum sapiente sit, ullam unde voluptatibus? Accusamus ad aspernatur, at atque commodi cupiditate delectus deleniti dicta distinctio et ex exercitationem facilis illo illum iure laboriosam libero maxime nam nostrum obcaecati pariatur perspiciatis porro praesentium ratione reiciendis, rem repellendus reprehenderit sed tempora ullam unde veniam vero voluptatibus? Aliquam eos inventore magni omnis quasi. Aperiam magnam nemo quidem quis rem! Ad aliquam animi architecto aspernatur at commodi consequatur dolor doloremque eaque eius, esse ex harum ipsam itaque iusto laboriosam, libero minima necessitatibus nemo nihil nulla omnis possimus quibusdam quisquam reprehenderit rerum voluptatibus. Aperiam commodi fugiat ipsa iste necessitatibus quod quos, soluta vitae? A aliquid ducimus eum inventore odio quibusdam sit vero voluptatem. A ad adipisci est fugit harum illum libero perferendis porro tenetur totam. Aliquam aperiam beatae consequuntur cupiditate deserunt, dolor dolores fugiat impedit iusto magni minus, necessitatibus odit omnis qui ratione recusandae, repellendus sunt? Aliquid at atque dignissimos dolores est, ipsam modi natus quam similique totam unde veritatis. Aliquid autem debitis dolorum eaque eligendi et eveniet fugiat id in ipsum laudantium, maiores molestiae nemo nihil non nulla optio quae quas quasi quis quisquam recusandae sapiente totam, vel vero. Amet consequatur cupiditate deserunt dolorem error esse ipsum modi odit omnis qui? Accusantium amet commodi consectetur consequuntur dolorem doloribus dolorum exercitationem facere harum, nesciunt perferendis veritatis voluptatum! Aspernatur at consequatur corporis deserunt quibusdam recusandae vel voluptatem. A consectetur deserunt, dolorum itaque nisi optio placeat repellendus repudiandae. At commodi, ducimus ea eaque error excepturi, exercitationem fugit impedit libero nihil obcaecati officia omnis optio quam, quasi repellendus repudiandae saepe. Accusantium aperiam, architecto aut commodi consequuntur cumque dignissimos eaque explicabo laborum maxime minus necessitatibus optio, placeat quidem sapiente unde veritatis? Consequuntur cum dignissimos dolorum ea enim et facilis fuga labore, molestiae mollitia nobis nostrum perferendis ullam voluptas voluptatibus! Ipsum iusto magnam, nam neque nulla quas! Adipisci aliquam aperiam aspernatur assumenda commodi consequatur consequuntur debitis dolorum enim eos error, et hic in itaque iure laboriosam, magnam maxime, quaerat quam quas qui quisquam quos recusandae repellendus repudiandae totam velit voluptas! Asperiores aspernatur deleniti et excepturi in, natus nesciunt odit omnis veritatis. Blanditiis dignissimos eius eligendi quia quo soluta voluptatem! Consectetur incidunt modi nisi quidem! Nobis, sint.
            </div>
            </div>


        </div>
    );

}