/**
 * Utility functions for Google Sheets integration
 */

/**
 * Submits form data to Google Sheets
 * @param data - The form data to submit
 * @returns Promise with the response
 */
export async function submitToGoogleSheets(data: any): Promise<{ success: boolean; message: string }> {
  try {
    // Replace this URL with your Google Apps Script Web App URL
    const GOOGLE_SHEETS_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL || '';
    
    if (!GOOGLE_SHEETS_URL) {
      console.error('Google Sheets URL is not configured');
      return { 
        success: false, 
        message: 'Konfigurasi pengiriman data belum lengkap. Silakan hubungi administrator.' 
      };
    }

    // Format date to string if it exists
    const formattedData = { ...data };
    if (formattedData.tanggalLahir instanceof Date) {
      formattedData.tanggalLahir = formattedData.tanggalLahir.toISOString().split('T')[0]; // YYYY-MM-DD format
    }

    console.log('Attempting to submit data to:', GOOGLE_SHEETS_URL);
    
    // Send data to Google Sheets with improved error handling
    try {
      const response = await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formattedData),
        mode: 'no-cors', // Change to no-cors to bypass CORS restrictions
        cache: 'no-cache',
        credentials: 'omit'
      });
      
      // When using no-cors, we can't access the response content
      // So we assume success if the fetch didn't throw an error
      return { 
        success: true, 
        message: 'Data berhasil dikirim ke database!' 
      };
    } catch (fetchError) {
      console.error('Fetch error:', fetchError);
      throw new Error(`Fetch failed: ${fetchError.message}`);
    }
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    return { 
      success: false, 
      message: 'Terjadi kesalahan saat mengirim data. Silakan coba lagi.' 
    };
  }
}