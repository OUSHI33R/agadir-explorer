import './Page404.css'
import { BsFillQuestionCircleFill } from 'react-icons/bs';
function Page404() {
  return (
<section class="page_404">
	<div class="container">

        <br></br>
        <br></br>
        <br></br>
        <br></br>
		<div class="row">	
		<div class="col-sm-12 ">
		<div class="col-sm-10 col-sm-offset-1  text-center">
		<div class="four_zero_four_bg">
            <center>
		    	<h1 class="text-center ">404</h1>
            </center>
		</div>
		<div class="contant_box_404">
            <center>
                <h3 class="h2">
                Look like you're out of Agadir !!
                </h3>
                <p>the page you are looking for not avaible!</p>
                <a href="/home" class="link_404">Go to Home</a>
            </center>
	    </div>
		</div>
		</div>
		</div>
	</div>
</section>
  );
}
export default Page404;