import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 24,
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 10,
  },
  title: { 
    fontSize: 18, 
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 12 
  },
  message: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 24,
    lineHeight: 24,
  },
  actions: { 
    flexDirection: 'row',
    justifyContent: 'flex-end' ,
    gap:12
  },
  cancelText: { 
    color: 'gray'
   },
  confirmText: {
     color: '#F88787', 
     fontWeight: 'bold' 
  },
  confirmBtn:{
    borderColor: '#F88787'
  }

});


export default styles