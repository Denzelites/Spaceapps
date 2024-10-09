<script lang='ts'>
     let index: number = 3
</script>

<div class="container">
    <div class="introduction text-[1.1rem] text-left flex flex-col items-center">
        <h1 class='text-center font-bold text-blue-700 text-[3.75rem]'>Naming Systems</h1>

        <p>Exoplanets, planets outside our solar system, are given names based on structured naming conventions. Two main naming systems are used:</p>
    </div>
<div class="point">
    
    <h2>1. IAU Designations</h2>
    <p>The <b>International Astronomical Union (IAU)</b> assigns names to exoplanets using the name of the star, followed by a lowercase letter. The first exoplanet discovered around a star gets the letter “b,” and subsequent discoveries are labeled with letters in the order of discovery (c, d, etc.).</p>
    <div class="example">
        <p><b>Example:</b> 51 Pegasi b is the first planet discovered around the star 51 Pegasi.</p>
    </div>
</div>


<div class="point">

    <h2>2. Catalog Designations</h2>
    <p>Many exoplanets are discovered through large surveys, so their names often include catalog numbers that indicate the mission or observatory that found them.</p>
    
    <div class="note">
        <b>Common Catalogs:</b>
        <ul>
            <li><b>Kepler Mission:</b> Exoplanets discovered by the Kepler Space Telescope are named with the prefix "Kepler-" and a number for the star system, followed by a lowercase letter (e.g., Kepler-22b).</li>
            <li><b>WISE:</b> The WISE mission follows a similar format (e.g., WISE 0855−0714b).</li>
            <li><b>OGLE:</b> The OGLE project uses designations for planets discovered via gravitational lensing (e.g., OGLE-2005-BLG-390Lb).</li>
        </ul>
    </div>
</div>
<div class="point">

    
    <h2>3. Alternative Naming Systems</h2>
    <p>Occasionally, exoplanets are named through public contests or given culturally significant names.</p>
    
    <div class="example">
        <p><b>Example:</b> 51 Pegasi b was named <b>Dimidium</b> after a public voting campaign.</p>
    </div>
</div>
</div>

 <a href="quiz.html?title=overview" class="quiz-button">Take a quiz</a>

 <style>
    .quiz-button {
    display: inline-block;
    margin-top: 20px;
    padding: 15px 30px;
    background-color: #1f2937;
    color: #fff;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    border-radius: 50px;
    transition: background-color 0.3s ease;
}
.quiz-button:hover {
    background-color: #218838;
}

.point{
        @apply my-8 ;
    }
    .point p{
        @apply text-lg ;
    }
    h2{
        @apply text-start text-blue-700 text-[1.75rem] font-semibold;
    }
 </style>