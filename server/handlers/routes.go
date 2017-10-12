package handlers

import "github.com/gorilla/mux"

// RegisterHandlers registers all the handlers at appropriate routes
func RegisterHandlers(router *mux.Router) {
	// Public endpoints
	router.Path("/health").Handler(healthCheckHandler{})

}
