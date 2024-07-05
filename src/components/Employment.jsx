function Employment(){
    <div>
        <p>Education</p>
        <form>
            <div>
                <label htmlFor="school_name">School Name</label>
                <input 
                    type="text" 
                    name="school_name"
                    id="school_name"
                    placeholder="ex: UT Austin"
                />
            </div>
            <div>
                <label htmlFor="degree">Degree</label>
                <input 
                    type="text" 
                    name="degree" 
                    id="degree" 
                    placeholder="ex: Computer Science"
                />
            </div>
            <div>
                <label htmlFor="date">Date Attended</label>
                <input 
                    type="text" 
                    name="date" 
                    id="date"
                    placeholder="mm/dd/yyyy" 
                />
            </div>
        </form>
    </div>

}

export default Employment