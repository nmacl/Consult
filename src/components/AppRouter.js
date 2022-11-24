function AppRouter() {
    return(

        <BrowserRouter>
        
            <Routes>

                <Route path="/home" element={
                    <HomePage />
                } />

                <Route path="/promote" element= {
                    <EventsPage />
                } />

                <Route path="/about" element = {
                    <About />
                } />


            </Routes>
        
        </BrowserRouter>

    )
}

export default AppRouter